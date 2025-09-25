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

export const CharacterTable = ({ characters }: CharacterTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Personagem</th>
          <th>Séries</th>
          <th>Eventos</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <tr key={character.id}>
            <td>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                width="50"
                height="50"
              />
              {character.name}
            </td>
            <td>
              {character.series.items
                .slice(0, 3)
                .map((series) => series.name)
                .join(", ")}
            </td>
            <td>
              {character.events.items
                .slice(0, 3)
                .map((event) => event.name)
                .join(", ")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
