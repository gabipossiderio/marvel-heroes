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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const SkeletonButton = styled.div<{ $isArrow?: boolean }>`
  background-color: #f3f4f6;
  border-radius: ${(props) => props.$isArrow ? "0.25rem" : "22%"};
  width: ${(props) => props.$isArrow ? "1.5rem" : "2rem"};
  height: ${(props) => props.$isArrow ? "1.5rem" : "2rem"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationSkeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonButton $isArrow />
      <SkeletonButton $isArrow />
      <SkeletonButton />
      <SkeletonButton />
      <SkeletonButton />
      <SkeletonButton />
      <SkeletonButton />
      <SkeletonButton $isArrow />
      <SkeletonButton $isArrow />
    </SkeletonContainer>
  );
};