import styled from "styled-components";
import { useCharacterSearch } from "./hooks/useCharacterSearch";
import { SearchInput } from "./components/SearchInput";
import { CharacterTable } from "./components/CharacterTable";
import { Pagination } from "./components/Pagination";

const ErrorMessage = styled.div`
  color: red;
  padding: 20px;
  text-align: center;
`;

const EmptyState = styled.div`
  padding: 20px;
  text-align: center;
`;

function App() {
  const {
    characters,
    loading,
    search,
    setSearch,
    error,
    currentPage,
    totalPages,
    onPageChange
  } = useCharacterSearch();

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div>
      <h1>Busca de personagens</h1>
      <SearchInput value={search} onChange={handleSearchChange} />

      {loading ? (
        <div>Carregando personagens...</div>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : characters.length === 0 ? (
        <EmptyState>Nenhum personagem encontrado.</EmptyState>
      ) : (
        <>
          <CharacterTable characters={characters} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
}

export default App;
