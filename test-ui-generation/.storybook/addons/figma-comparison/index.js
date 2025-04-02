import React from "react";
import { addons, types } from "@storybook/manager-api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, PANEL_ID } from "./constants";
import { FigmaComparison } from "./FigmaComparison";

addons.register(ADDON_ID, () => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: "Figma Comparison",
        match: ({ viewMode }) => viewMode === "story",
        render: ({ active }) => (
            <AddonPanel active={active}>
                <FigmaComparison />
            </AddonPanel>
        ),
    });
});
