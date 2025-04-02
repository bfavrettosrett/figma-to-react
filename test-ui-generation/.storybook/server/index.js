import express from "express";
import cors from "cors";
import { compareImages } from "resemblejs";
import puppeteer from "puppeteer";
import fetch from "node-fetch";
import config from "../mcp.config.js";

const app = express();
app.use(cors());
app.use(express.json());

// Récupérer l'image Figma
app.get("/api/figma-image", async (req, res) => {
    try {
        const response = await fetch(
            `https://api.figma.com/v1/images/${config.figma.fileKey}?ids=${config.figma.nodeId}`,
            {
                headers: {
                    "X-Figma-Token": process.env.FIGMA_ACCESS_TOKEN,
                },
            }
        );
        const data = await response.json();
        res.json(data.images[config.figma.nodeId]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Capturer une capture d'écran Storybook
app.get("/api/storybook-screenshot", async (req, res) => {
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
        await page.goto(`${config.storybook.url}/iframe.html?id=${config.storybook.storyId}`);
        await page.waitForSelector("#storybook-root");
        const screenshot = await page.screenshot({ encoding: "base64" });
        res.json(`data:image/png;base64,${screenshot}`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await browser.close();
    }
});

// Comparer les images
app.post("/api/compare-images", async (req, res) => {
    try {
        const { figmaUrl, storybookUrl } = req.body;
        const comparison = await compareImages(figmaUrl, storybookUrl, {
            output: {
                errorColor: {
                    red: 255,
                    green: 0,
                    blue: 0,
                },
                errorType: "movement",
                transparency: 0.3,
                largeImageThreshold: 1200,
                useCrossOrigin: false,
            },
            scaleToSameSize: true,
            ignore: ["antialiasing", "colors"],
        });

        const differences = [];
        if (comparison.misMatchPercentage > config.comparison.tolerance) {
            differences.push({
                description: `Différence de ${comparison.misMatchPercentage}% détectée`,
                data: comparison,
            });
        }

        res.json({ differences });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const port = 3030;
app.listen(port, () => {
    console.log(`Serveur de comparaison démarré sur le port ${port}`);
});
