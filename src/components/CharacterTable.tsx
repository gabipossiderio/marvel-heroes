import styled from "styled-components";

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: Array<{ name: string }>;
  };
  events: {
    items: Array<{ name: string }>;
  };
}

interface CharacterTableProps {
  characters: Character[];
}

const TableContainer = styled.div`
  margin: 1.25rem 0;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr;
  padding: 0.9375rem 1.25rem;
  border-bottom: 0.0625rem solid #dee2e6;
  font-weight: 600;
  color: #555555;
  margin-bottom: 0.5rem;
  background-color: #E5E5E5;
  gap: 2.5rem;
`;

const ScrollableArea = styled.div`
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 0.5rem;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #167ABC;
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #0f5a94;
  }
`;

const CharacterRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr;
  padding: 1.25rem;
  background-color: white;
  border-bottom: 0.0625rem solid #dee2e6;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);
  gap: 2.5rem;
`;

const CharacterCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
`;

const CharacterImage = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const CharacterName = styled.span`
  font-weight: 700;
  color: #555555;
`;

const SeriesCell = styled.div`
  color: #555555;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const EventsCell = styled.div`
  color: #555555;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CharacterTable = ({ characters }: CharacterTableProps) => {
  return (
    <TableContainer>
      <TableHeader>
        <div>Personagem</div>
        <div>Séries</div>
        <div>Eventos</div>
      </TableHeader>

      <ScrollableArea>
        {characters.map((character) => (
          <CharacterRow key={character.id}>
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
                  .map((series, index) => (
                    <div key={index}>{series.name}</div>
                  ))
              ) : (
                <div>Não informado</div>
              )}
            </SeriesCell>

            <EventsCell>
              {character.events.items.length > 0 ? (
                character.events.items
                  .slice(0, 3)
                  .map((event, index) => (
                    <div key={index}>{event.name}</div>
                  ))
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
