import React, { useEffect, useState } from 'react';
import { useStorybookApi } from '@storybook/manager-api';
import { styled } from '@storybook/theming';

const Container = styled.div`
  padding: 1rem;
`;

const ComparisonView = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 0, 0, 0.2);
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.3s;
`;

export const FigmaComparison = () => {
  const [figmaImage, setFigmaImage] = useState(null);
  const [storybookImage, setStorybookImage] = useState(null);
  const [differences, setDifferences] = useState([]);
  const api = useStorybookApi();

  useEffect(() => {
    const fetchImages = async () => {
      // Récupérer l'image Figma via l'API Figma
      const figmaResponse = await fetch('/api/figma-image');
      const figmaImageUrl = await figmaResponse.json();
      setFigmaImage(figmaImageUrl);

      // Capturer le rendu Storybook
      const storybookResponse = await fetch('/api/storybook-screenshot');
      const storybookImageUrl = await storybookResponse.json();
      setStorybookImage(storybookImageUrl);

      // Comparer les images
      const comparisonResponse = await fetch('/api/compare-images', {
        method: 'POST',
        body: JSON.stringify({
          figmaUrl: figmaImageUrl,
          storybookUrl: storybookImageUrl
        })
      });
      const { differences } = await comparisonResponse.json();
      setDifferences(differences);
    };

    fetchImages();
  }, [api.getCurrentStoryData()]);

  return (
    <Container>
      <h2>Figma vs Storybook Comparison</h2>
      <ComparisonView>
        <ImageContainer>
          <h3>Figma Design</h3>
          {figmaImage && <Image src={figmaImage} alt="Figma design" />}
          <Overlay visible={differences.length > 0} />
        </ImageContainer>
        <ImageContainer>
          <h3>Storybook Component</h3>
          {storybookImage && <Image src={storybookImage} alt="Storybook component" />}
          <Overlay visible={differences.length > 0} />
        </ImageContainer>
      </ComparisonView>
      {differences.length > 0 && (
        <div>
          <h3>Différences détectées :</h3>
          <ul>
            {differences.map((diff, index) => (
              <li key={index}>{diff.description}</li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};
