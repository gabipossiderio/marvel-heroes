import styled from "styled-components";
import { useState } from "react";
import { useCharacterSearch } from "./hooks/useCharacterSearch";
import type { Character } from "./types/Character";
import { SearchInput } from "./components/SearchInput";
import { CharacterTable } from "./components/CharacterTable";
import { Pagination } from "./components/Pagination";
import { Navbar } from "./components/Navbar";
import { CharacterSkeleton } from "./components/CharacterSkeleton";
import { PaginationSkeleton } from "./components/PaginationSkeleton";
import { CharacterDetail } from "./components/CharacterDetail";

const AppContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 1.25rem;
  height: calc(100vh - 8rem);
  padding-top: 6rem;
  padding-bottom: 6rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 5.5rem;
    height: calc(100vh - 6.5rem);
  }
`;

const Header = styled.h1`
  color: #555555;
  margin-bottom: 1.875rem;
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    text-align: center;
  }
`;

const ContentArea = styled.div`
  margin-bottom: 2rem;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 1rem 0;
  box-shadow: 0 -0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: red;
  padding: 1.25rem;
  text-align: center;
`;

const EmptyState = styled.div`
  padding: 1.25rem;
  text-align: center;
`;

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const {
    characters,
    loading,
    search,
    setSearch,
    error,
    currentPage,
    totalPages,
    onPageChange,
  } = useCharacterSearch();

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleBackToList = () => {
    setSelectedCharacter(null);
  };

  if (selectedCharacter) {
    return (
      <>
        <Navbar />
        <CharacterDetail character={selectedCharacter} onBack={handleBackToList} />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <AppContainer>
        <Header>Busca de Personagens</Header>
        <SearchInput value={search} onChange={handleSearchChange} />

        <ContentArea>
          {loading ? (
            <CharacterSkeleton />
          ) : error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : characters.length === 0 ? (
            <EmptyState>Nenhum personagem encontrado.</EmptyState>
          ) : (
            <CharacterTable characters={characters} onCharacterClick={handleCharacterClick} />
          )}
        </ContentArea>
      </AppContainer>

      <Footer>
        {loading ? (
          <PaginationSkeleton />
        ) : (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        )}
      </Footer>
    </>
  );
}

export default App;
