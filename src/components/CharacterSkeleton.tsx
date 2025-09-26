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
  background-color: #e5e5e5;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SkeletonHeaderText = styled.div`
  height: 1.25rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
`;

const MobileSkeletonHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    height: 1rem;
    width: 8rem;
    background-color: #f3f4f6;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    margin-left: 5.5rem;
  }
`;

const SkeletonArea = styled.div`
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 0.5rem;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(22, 122, 188, 0.3);
    border-radius: 0.125rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(22, 122, 188, 0.5);
  }

  @media (max-width: 768px) {
    max-height: 53vh;
    padding-right: 1rem;
    padding-bottom: 1rem;
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

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.1);
    border: 0.0625rem solid #e5e5e5;
    border-bottom: 0.0625rem solid #e5e5e5;
    gap: 0.75rem;
    width: 100%;
    box-sizing: border-box;
  }
`;

const SkeletonCharacterCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  @media (max-width: 768px) {
    flex: 1;
    gap: 0.75rem;
  }
`;

const SkeletonImage = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;
  }
`;

const SkeletonText = styled.div<{ width?: string }>`
  height: 1rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  width: ${(props) => props.width || "8rem"};
`;

const SkeletonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SkeletonLine = styled.div<{ width?: string }>`
  height: 0.875rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  width: ${(props) => props.width || "100%"};
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

      <MobileSkeletonHeader />

      <SkeletonArea>
        {[...Array(10)].map((_, index) => renderSkeletonRow(index))}
      </SkeletonArea>
    </SkeletonContainer>
  );
};
