//Import Components
import { Header } from "../../components/Header";
import { History } from "../../components/History";
import { Profile } from "../../components/Profile";
import { Feed } from "../../components/Feed";

//Import Style
import { Container, Main, Content, ProfileInfo } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header />
      <Main>
        <Content>
          <History />
          <Feed />
        </Content>

        <ProfileInfo>
          <Profile />
        </ProfileInfo>
      </Main>
    </Container>
  );
}
