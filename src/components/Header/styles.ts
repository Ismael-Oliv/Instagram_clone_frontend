import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(219, 219, 219, 1);
`;

export const Menu = styled.nav`
  display: flex;
  max-width: 975px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  height: 53px;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-top: 10px;
  }
`;

export const MenuContainer = styled.section``;

export const MenuContent = styled.article`
  a {
    img:last-child {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
`;
