import { Header } from "../../components/Header";
import { History } from "../../components/History";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { Container, Main, Content, ProfileInfo } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header />
      <Main>
        <Content>
          <History />
          <Post />
        </Content>

        <ProfileInfo>
          <Profile />
        </ProfileInfo>
      </Main>
    </Container>
  );
}
