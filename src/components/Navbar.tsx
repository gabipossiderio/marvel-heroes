import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: white;
  width: 100%;
  padding: 1rem 2rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 2rem;
  width: auto;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.125rem;
    }
  }
`;

const UserName = styled.span`
  color: #333333;
  font-weight: 600;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const UserRole = styled.span`
  color: #555555;
`;

const UserAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e5e5e5;
  color: #666666;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 1000;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: none;

  &:hover {
    background-color: #666666;
    color: white;
  }

  @media (max-width: 768px) {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 2.75rem;
    height: 2.75rem;
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <LogoImage src="/objective-logo.png" alt="Objective" />
      </Logo>
      <UserInfo>
        <div>
          <UserName>Gabriella Possidério</UserName>
          <UserRole>Teste de Front-End</UserRole>
        </div>
        <UserAvatar>GP</UserAvatar>
      </UserInfo>
    </NavbarContainer>
  );
};
