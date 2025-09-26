import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const PaginationButton = styled.button<{ $active?: boolean; $isArrow?: boolean }>`
  padding: 0.5rem 0.75rem;
  border: ${(props) => props.$isArrow ? "none" : `0.0625rem solid ${props.$active ? "#167ABC" : "#D0D0D0"}`};
  background: ${(props) => props.$isArrow ? "transparent" : (props.$active ? "#167ABC" : "#F5F5F5")};
  color: ${(props) => (props.$active ? "#FFFFFF" : "#555555")};
  cursor: pointer;
  border-radius: ${(props) => props.$isArrow ? "0" : "22%"};
  min-width: 2rem;
  height: 2rem;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.$active ? "500" : "400")};
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: ${(props) => props.$isArrow ? "none" : "auto"};
  }

  &:disabled {
    background: ${(props) => props.$isArrow ? "transparent" : (props.$active ? "#167ABC" : "#F5F5F5")};
    color: ${(props) => (props.$active ? "#FFFFFF" : "#555555")};
    cursor: default;
    border-color: ${(props) => props.$isArrow ? "none" : (props.$active ? "#167ABC" : "#D0D0D0")};
  }

  &:hover:not(:disabled) {
    background: ${(props) => props.$isArrow ? "transparent" : (props.$active ? "#167ABC" : "#5DAFFF")};
    border-color: ${(props) => props.$isArrow ? "none" : (props.$active ? "#167ABC" : "#5DAFFF")};
    color: ${(props) => (props.$active ? "#FFFFFF" : (props.$isArrow ? "#5DAFFF" : "white"))};
  }
`;

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <PaginationButton
          key={i}
          $active={i === currentPage}
          disabled={i === currentPage}
          onClick={() => onPageChange(i)}
          aria-label={`Página ${i}`}
        >
          {i}
        </PaginationButton>
      );
    }

    return pages;
  };

  return (
    <PaginationContainer>
      {currentPage > 2 && (
        <PaginationButton
          $isArrow
          onClick={() => onPageChange(1)}
          aria-label="Primeira página"
        >
          ‹‹
        </PaginationButton>
      )}

      {currentPage > 1 && (
        <PaginationButton
          $isArrow
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Página anterior"
        >
          ‹
        </PaginationButton>
      )}

      {renderPageNumbers()}

      {currentPage < totalPages && (
        <PaginationButton
          $isArrow
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Próxima página"
        >
          ›
        </PaginationButton>
      )}

      {currentPage < totalPages - 1 && (
        <PaginationButton
          $isArrow
          onClick={() => onPageChange(totalPages)}
          aria-label="Última página"
        >
          ››
        </PaginationButton>
      )}
    </PaginationContainer>
  );
};
