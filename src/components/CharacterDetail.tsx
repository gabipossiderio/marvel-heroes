import styled from "styled-components";
import type { Character } from "../types/Character";

interface CharacterDetailProps {
  character: Character;
  onBack: () => void;
}

const DetailContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.25rem;
  padding-top: 6rem;
  padding-bottom: 8rem;
  min-height: 100vh;
`;

const BackButtonContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    background: white;
    padding: 1rem;
    box-shadow: 0 -0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
  }
`;

const BackButton = styled.button`
  background: #167abc;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #0f5a94;
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
    background: linear-gradient(90deg, #167abc, #0f5a94, #167abc);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 0.5rem;
    min-height: 7rem;
    overflow: hidden;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const CharacterImage = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);
  border: 0.25rem solid white;

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
    margin: 0 auto;
  }
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterName = styled.h1`
  color: #2c3e50;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.1;
  }
`;

const CharacterDescription = styled.p`
  color: #555555;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-top: 0.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0.5rem;
    gap: 1rem;
    margin-bottom: 6rem;
    overflow-y: auto;
    max-height: calc(100vh - 29rem);

    /* Custom scrollbar */
    &::-webkit-scrollbar {
      width: 0.25rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(22, 122, 188, 0.3);
      border-radius: 0.125rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(22, 122, 188, 0.5);
    }
  }
`;

const MediaSection = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.06);
  border: 0.0625rem solid rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.125rem solid #e9ecef;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.125rem;
    left: 0;
    width: 3rem;
    height: 0.125rem;
    background: linear-gradient(90deg, #167abc, #0f5a94);
  }
`;

const MediaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 8rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(22, 122, 188, 0.3);
    border-radius: 0.125rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(22, 122, 188, 0.5);
  }
`;

const MediaItem = styled.div`
  background: #f8f9fa;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  color: #495057;
  font-size: 0.875rem;
  line-height: 1.4;
  flex-shrink: 0;
`;

const EmptyDetailsSection = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.06);
  border: 0.0625rem solid rgba(0, 0, 0, 0.05);
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const EmptyMessage = styled.p`
  color: #666666;
  font-size: 1.125rem;
  margin: 0;
  font-weight: 500;
`;

export const CharacterDetail = ({
  character,
  onBack,
}: CharacterDetailProps) => {
  const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  const hasComics =
    character.comics?.items && character.comics.items.length > 0;
  const hasSeries =
    character.series?.items && character.series.items.length > 0;
  const hasEvents =
    character.events?.items && character.events.items.length > 0;
  const hasAnyDetails = hasComics || hasSeries || hasEvents;

  return (
    <>
      <DetailContainer>
        <HeroSection>
          <HeroContent>
            <ImageContainer>
              <CharacterImage src={imageUrl} alt={character.name} />
            </ImageContainer>
            <CharacterInfo>
              <CharacterName>{character.name}</CharacterName>
              {character.description && (
                <CharacterDescription>
                  {character.description}
                </CharacterDescription>
              )}
            </CharacterInfo>
          </HeroContent>
        </HeroSection>

        {hasAnyDetails ? (
          <MediaGrid>
            {hasComics && (
              <MediaSection>
                <SectionTitle>Comics</SectionTitle>
                <MediaList>
                  {character.comics!.items.map((comic, index) => (
                    <MediaItem key={index}>{comic.name}</MediaItem>
                  ))}
                </MediaList>
              </MediaSection>
            )}

            {hasSeries && (
              <MediaSection>
                <SectionTitle>Séries</SectionTitle>
                <MediaList>
                  {character.series!.items.map((serie, index) => (
                    <MediaItem key={index}>{serie.name}</MediaItem>
                  ))}
                </MediaList>
              </MediaSection>
            )}

            {hasEvents && (
              <MediaSection>
                <SectionTitle>Eventos</SectionTitle>
                <MediaList>
                  {character.events!.items.map((event, index) => (
                    <MediaItem key={index}>{event.name}</MediaItem>
                  ))}
                </MediaList>
              </MediaSection>
            )}
          </MediaGrid>
        ) : (
          <EmptyDetailsSection>
            <EmptyMessage>
              Ops, esse personagem não possui comics e séries! Thanos estalou os
              dedos e apagou os detalhes daqui.
            </EmptyMessage>
          </EmptyDetailsSection>
        )}
      </DetailContainer>

      <BackButtonContainer>
        <BackButton onClick={onBack}>Voltar</BackButton>
      </BackButtonContainer>
    </>
  );
};
