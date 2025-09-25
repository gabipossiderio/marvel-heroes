import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const SkeletonContainer = styled.div`
  margin: 1.25rem 0;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const SkeletonHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr;
  padding: 0.9375rem 1.25rem;
  border-bottom: 0.0625rem solid #dee2e6;
  margin-bottom: 0.5rem;
  background-color: #E5E5E5;
  gap: 2.5rem;
`;

const SkeletonHeaderText = styled.div`
  height: 1.25rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
`;

const SkeletonArea = styled.div`
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #167ABC;
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #0f5a94;
  }
`;

const SkeletonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr;
  padding: 1.25rem;
  background-color: white;
  border-bottom: 0.0625rem solid #dee2e6;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);
  gap: 2.5rem;
`;

const SkeletonCharacterCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
`;

const SkeletonImage = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
`;

const SkeletonText = styled.div<{ width?: string }>`
  height: 1rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  width: ${props => props.width || '8rem'};
`;

const SkeletonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SkeletonLine = styled.div<{ width?: string }>`
  height: 0.875rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  width: ${props => props.width || '100%'};
`;

export const CharacterSkeleton = () => {
  const renderSkeletonRow = (index: number) => (
    <SkeletonRow key={index}>
      <SkeletonCharacterCell>
        <SkeletonImage />
        <SkeletonText width="7rem" />
      </SkeletonCharacterCell>

      <SkeletonColumn>
        <SkeletonLine width="80%" />
        <SkeletonLine width="60%" />
        <SkeletonLine width="70%" />
      </SkeletonColumn>

      <SkeletonColumn>
        <SkeletonLine width="75%" />
        <SkeletonLine width="85%" />
      </SkeletonColumn>
    </SkeletonRow>
  );

  return (
    <SkeletonContainer>
      <SkeletonHeader>
        <SkeletonHeaderText />
        <SkeletonHeaderText />
        <SkeletonHeaderText />
      </SkeletonHeader>

      <SkeletonArea>
        {[...Array(10)].map((_, index) => renderSkeletonRow(index))}
      </SkeletonArea>
    </SkeletonContainer>
  );
};