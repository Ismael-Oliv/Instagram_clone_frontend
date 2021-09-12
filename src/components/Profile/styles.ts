import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;

  font-size: 14px;
  height: 100%;
  max-width: 293px;
  width: 100%;
`;

export const ProfileContent = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
  }

  div {
    a {
      font-size: 12px;
      color: #0095f6;
      text-decoration: none;
      font-weight: bold;
    }
  }

  article {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    span {
      align-self: flex-start;
    }
    strong {
      align-self: flex-start;
    }
  }
`;

export const Sugestions = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    > span {
      font-size: 14px;
      color: #8e8e8e;
      font-weight: bold;
    }

    > a {
      font-size: 12px;
      text-decoration: none;
      color: #262626;
      font-weight: bold;
    }
  }
`;

export const SugestionsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;

  section {
    display: flex;
    padding: 8px 0px 8px 8px;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    article {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding-left: 10px;
    }

    div {
      a {
        font-size: 12px;
        text-decoration: none;
        color: #0095f6;
        font-family: '-apple-system,BlinkMacSystemFont,' Segoe UI
          ',Roboto,Helvetica,Arial,sans-serif';
        font-weight: 600;
      }
    }
  }
`;
