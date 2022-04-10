import styled from "styled-components";

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
  height: 60px;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  height: 36px;

  box-flex: 1;
  flex: 1 0 127px;

  a {
    margin-top: 10px;
  }
`;

export const IconsContainer = styled.article`
  display: flex;
  box-flex: 1;
  flex: 1 0 127px;

  align-items: center;
  justify-content: end;
  a {
    & + a {
      margin-left: 22px;
    }
    img {
      width: 23.5px;
      height: 23.5px;
    }
  }
`;

export const IconsContent = styled.div`
  height: 23.5px;
`;

export const ProfilePicture = styled.a`
  img {
    width: 23.5px;
    height: 23.5px;

    border-radius: 50%;
  }
`;
