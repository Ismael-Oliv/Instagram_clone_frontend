import styled from "styled-components";

export const Container = styled.section`
  border: 1px solid rgba(219, 219, 219, 1);
  max-width: 614px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 16px;
`;

export const Picture = styled.figure`
  max-width: 614px;
  width: 100%;

  img {
    width: 100%;
  }
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;

  svg {
    font-size: 30px;
    font-weight: 500;
  }
  article {
    svg {
      font-size: 30px;
      font-weight: 500;
    }
  }
`;

export const Footer = styled.footer``;

export const AddComments = styled.article`
  display: flex;
  align-items: center;

  width: 100%;
  border-top: 1px solid #efefef;
  height: 56px;

  div {
    display: flex;
    align-items: center;
    padding: 0 16px;
    flex: 1;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    input {
      flex: 1;
      height: 36px;
      padding: 5px;
      border: 0;
    }
    button {
      border: 0;
      background-color: transparent;
      color: rgba(0, 149, 246);
      font-weight: 600;
      opacity: 3;
    }
  }
`;
