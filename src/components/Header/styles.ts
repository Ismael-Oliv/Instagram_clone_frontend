import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: gray;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  max-width: 1120px;
  width: 100%;
  margin: 1rem auto;

  justify-content: space-between;

  ul {
    display: flex;

    li {
      list-style: none;
      a {
        text-decoration: none;
      }
      & + li {
        margin-left: 1rem;
      }
    }
  }

  div {
    a {
      text-decoration: none;
      & + a {
        margin-left: 1rem;
      }
    }
  }
`;
