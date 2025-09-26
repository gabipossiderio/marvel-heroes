import { useState, useEffect } from "react";
import { fetchCharacters } from "../services/marvelApi";

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

export const useCharacterSearch = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const searchCharacters = async () => {
      try {
        setLoading(true);
        setError("");
        const offset = (currentPage - 1) * 10;
        const response = await fetchCharacters(search.trim(), offset);
        setCharacters(response.results);
        setTotalPages(Math.ceil(response.total / 10));
      } catch {
        setError("Erro ao carregar personagens. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchCharacters, 1000);

    return () => clearTimeout(debounceTimer);
  }, [search, currentPage]);

  const handlePageChange = (page: number) => {
    setLoading(true);
    setCurrentPage(page);
  };

  const resetSearch = (newSearch: string) => {
    setSearch(newSearch);
    setCurrentPage(1);
  };

  return {
    characters,
    loading,
    search,
    setSearch: resetSearch,
    error,
    currentPage,
    totalPages,
    onPageChange: handlePageChange,
  };
};