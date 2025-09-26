import styled from "styled-components";
import type { Character } from "../types/Character";

interface CharacterTableProps {
  characters: Character[];
  onCharacterClick?: (character: Character) => void;
}

const TableContainer = styled.div`
  margin: 1.25rem 0;
`;

const MobileHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-weight: 500;
    color: #b5b5b5;
    margin-bottom: 1rem;
    padding-left: 5.5rem;
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.6fr;
  padding: 0.9375rem 1.25rem;
  border-bottom: 0.0625rem solid #dee2e6;
  font-weight: 500;
  color: #b5b5b5;
  margin-bottom: 0.5rem;
  background-color: #e5e5e5;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollableArea = styled.div`
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 0.5rem;

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

  @media (max-width: 768px) {
    max-height: 53vh;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }
`;

const CharacterRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.6fr;
  padding: 1.25rem;
  background-color: white;
  border-bottom: 0.0625rem solid #dee2e6;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);
  gap: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 6rem;
  align-items: center;

  &:hover {
    outline: 0.2rem solid #cccccc;
    outline-offset: -0.2rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.1);
    border: 0.0625rem solid #e5e5e5;
    border-bottom: 0.0625rem solid #e5e5e5;
    gap: 0.75rem;
    width: 100%;
    box-sizing: border-box;
    min-height: 5rem;
  }
`;

const CharacterCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  @media (max-width: 768px) {
    flex: 1;
    gap: 0.75rem;
  }
`;

const CharacterImage = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.5rem;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;
  }
`;

const CharacterName = styled.span`
  font-weight: 700;
  color: #555555;

  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const SeriesCell = styled.div`
  color: #555555;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: 500;
  align-self: flex-start;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const EventsCell = styled.div`
  color: #555555;
  line-height: 1.4;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  gap: 0.25rem;
  align-self: flex-start;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CharacterTable = ({
  characters,
  onCharacterClick,
}: CharacterTableProps) => {
  return (
    <TableContainer>
      <TableHeader>
        <div>Personagem</div>
        <div>Séries</div>
        <div>Eventos</div>
      </TableHeader>

      <MobileHeader>Personagem</MobileHeader>

      <ScrollableArea>
        {characters.map((character) => (
          <CharacterRow
            key={character.id}
            onClick={() => onCharacterClick?.(character)}
            data-testid={`character-row-${character.id}`}
          >
            <CharacterCell>
              <CharacterImage
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
              <CharacterName>{character.name}</CharacterName>
            </CharacterCell>

            <SeriesCell>
              {character.series.items.length > 0 ? (
                character.series.items
                  .slice(0, 3)
                  .map((series, index) => <div key={index}>{series.name}</div>)
              ) : (
                <div>Não informado</div>
              )}
            </SeriesCell>

            <EventsCell>
              {character.events.items.length > 0 ? (
                character.events.items
                  .slice(0, 3)
                  .map((event, index) => <div key={index}>{event.name}</div>)
              ) : (
                <div>Não informado</div>
              )}
            </EventsCell>
          </CharacterRow>
        ))}
      </ScrollableArea>
    </TableContainer>
  );
};
