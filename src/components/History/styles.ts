import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 614px;
  padding: 16px 0;
  height: 118px;

  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  border-radius: 3px;
  margin-bottom: 24px;
`;

export const Content = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export const ListItemContainer = styled.section`
  position: relative;
  display: flex;
  overflow-y: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.div`
  flex: none;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75px;

    border-radius: 50%;

    text-decoration: none;
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border-color: red;
    }
    span {
      font-size: 12px;
    }
  }
`;

export const NextButton = styled.div`
  position: absolute;
  right: 10px;
  top: 30%;
  cursor: pointer;
  svg {
    font-size: 30px;
    fill-opacity: 0.7;
    background-position: -244px -107px;
    border-radius: 50%;
  }
`;

export const PrevButton = styled.div`
  position: absolute;
  left: 10px;
  top: 30%;
  cursor: pointer;

  z-index: 10;
  svg {
    font-size: 30px;
    border-radius: 50%;
  }
`;
