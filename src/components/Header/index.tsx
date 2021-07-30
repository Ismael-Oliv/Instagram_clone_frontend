import { Container, Link, Menu } from "./styles";

export function Header() {
  return (
    <Container>
      <Menu>
        <Link>
          <li>
            <a href="http://localhost:3000/">Pagina Inicial</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Perfil</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Artigos</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Contate-me</a>
          </li>
        </Link>
      </Menu>
    </Container>
  );
}
