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
  gap: 8px;
  margin-top: 20px;
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${props => props.active ? '#167ABC' : '#dee2e6'};
  background: ${props => props.active ? '#167ABC' : 'white'};
  color: ${props => props.active ? 'white' : '#167ABC'};
  cursor: pointer;
  border-radius: 3px;
  min-width: 32px;
  height: 32px;
  font-size: 14px;
  font-weight: ${props => props.active ? '500' : '400'};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  &:disabled {
    background: ${props => props.active ? '#167ABC' : 'white'};
    color: ${props => props.active ? 'white' : '#167ABC'};
    cursor: default;
    border-color: ${props => props.active ? '#167ABC' : '#dee2e6'};
  }

  &:hover:not(:disabled) {
    background: ${props => props.active ? '#0f5a94' : '#e9ecef'};
    border-color: ${props => props.active ? '#0f5a94' : '#adb5bd'};
  }
`;

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
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
          active={i === currentPage}
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
          onClick={() => onPageChange(1)}
          aria-label="Primeira página"
        >
          &lt;&lt;
        </PaginationButton>
      )}

      {currentPage > 1 && (
        <PaginationButton
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Página anterior"
        >
          &lt;
        </PaginationButton>
      )}

      {renderPageNumbers()}

      {currentPage < totalPages && (
        <PaginationButton
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Próxima página"
        >
          &gt;
        </PaginationButton>
      )}

      {currentPage < totalPages - 1 && (
        <PaginationButton
          onClick={() => onPageChange(totalPages)}
          aria-label="Última página"
        >
          &gt;&gt;
        </PaginationButton>
      )}
    </PaginationContainer>
  );
};