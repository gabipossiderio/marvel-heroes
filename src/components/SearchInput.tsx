interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div>
      <label htmlFor="search">Nome do personagem</label>
      <input
        id="search"
        type="text"
        placeholder="Nome do personagem"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
