import { Container, Menu } from "./styles";

export function Header() {
  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <a href="http://localhot/">Home</a>
          </li>
          <li>
            <a href="http://localhot/post">Posts</a>
          </li>
        </ul>
        <div>
          <a href="http://">Entrar</a>
          <a href="http://">Cadastar</a>
        </div>
      </Menu>
    </Container>
  );
}
