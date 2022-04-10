import styled from "styled-components";

export const Container = styled.section`
  max-width: 614px;

  > section {
    & + section {
      margin-top: 24px;
    }
  }
`;
