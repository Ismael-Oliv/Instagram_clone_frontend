//Import Components
import { Post } from "../Post";

//Import Styles
import { Container } from "./style";

export function Feed() {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
    </Container>
  );
}
