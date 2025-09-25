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

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchCharacters("");
        setCharacters(data);
      } catch {
        setError("Erro ao carregar personagens. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  useEffect(() => {
    const searchCharacters = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchCharacters(search.trim());
        setCharacters(data);
      } catch {
        setError("Erro ao buscar personagens. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchCharacters, 1000);

    return () => clearTimeout(debounceTimer);
  }, [search]);

  return {
    characters,
    loading,
    search,
    setSearch,
    error,
  };
};