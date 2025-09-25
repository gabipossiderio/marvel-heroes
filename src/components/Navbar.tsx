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
`;

const UserName = styled.span`
  color: #333333;
  font-weight: 600;
`;

const UserRole = styled.span`
  color: #555555;
`;

const UserAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #E5E5E5;
  color: #666666;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #666666;
    color: white;
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <LogoImage src="/objective-logo.png" alt="Objective" />
      </Logo>
      <UserInfo>
        <UserName>Gabriella Possidério</UserName>
        <UserRole>Teste de Front-end</UserRole>
        <UserAvatar>GP</UserAvatar>
      </UserInfo>
    </NavbarContainer>
  );
};