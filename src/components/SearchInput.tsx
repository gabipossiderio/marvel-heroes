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
  font-weight: 500;
  color: #555555;
`;

const InputWrapper = styled.div`
  position: relative;
  max-width: 25rem;
`;

const SearchField = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: 3rem;
  border: 0.0625rem solid #ced4da;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  color: #555555;
  box-sizing: border-box;

  &::placeholder {
    color: #adb5bd;
  }

  &:focus {
    outline: none;
    border-color: #167ABC;
    box-shadow: 0 0 0 0.125rem rgba(22, 122, 188, 0.25);
  }
`;

const SearchIcon = styled.svg`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
`;

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
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
        <SearchIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor">
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </SearchIcon>
      </InputWrapper>
    </SearchContainer>
  );
};
