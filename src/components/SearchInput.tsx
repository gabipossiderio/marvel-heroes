import styled from "styled-components";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SearchLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  max-width: 25rem;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const SearchField = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: 3rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-style: italic;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.primary}33;
  }
`;

const SearchIcon = styled.svg`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textSecondary};
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  transition: color 0.3s ease;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &:focus {
    outline: 0.125rem solid ${({ theme }) => theme.colors.primary};
    outline-offset: 0.125rem;
    border-radius: 0.125rem;
  }
`;

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const handleClear = () => onChange('');

  return (
    <SearchContainer>
      <SearchLabel htmlFor="search">Nome do personagem</SearchLabel>
      <InputWrapper>
        <SearchField
          id="search"
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {value ? (
          <ClearButton
            type="button"
            onClick={handleClear}
            aria-label="Limpar pesquisa"
            title="Limpar pesquisa"
          >
            ✕
          </ClearButton>
        ) : (
          <SearchIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fill="currentColor"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </SearchIcon>
        )}
      </InputWrapper>
    </SearchContainer>
  );
};
