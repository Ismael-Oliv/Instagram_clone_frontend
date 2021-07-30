import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  background-color: white;
`;

export const Menu = styled.nav`
  width: 100%;
  border-bottom: 1px solid rgba(219, 219, 219, 1);
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Link = styled.ul`
  list-style-type: none;
  display: flex;

  li {
    text-decoration: none;
    padding: 20px;

    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
    }
  }
`;
