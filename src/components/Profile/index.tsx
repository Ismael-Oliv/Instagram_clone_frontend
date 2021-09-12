import ProfileImage from '../../assets/profile_image.jpg';
import {
  Container,
  ProfileContent,
  Sugestions,
  SugestionsContent,
} from './styles';

export function Profile() {
  const follwers = [1, 2, 3, 4, 5];

  return (
    <Container>
      <ProfileContent>
        <img src={ProfileImage} alt="profile" />
        <article>
          <strong>__Ismael.oliveira</strong>
          <span>Ismael Alves</span>
        </article>
        <div>
          <a href="http://localhost">Mudar</a>
        </div>
      </ProfileContent>
      <Sugestions>
        <div>
          <span>Sugestões para você</span>
          <a href="http://localhost:3001">Ver tudo</a>
        </div>
        <SugestionsContent>
          {follwers.map((follower) => (
            <section key={follower}>
              <img src={ProfileImage} alt="profile" />
              <article>
                <strong>__Ismael.oliveira</strong>
                <span>Seguido por</span>
              </article>
              <div>
                <a href="http://localhost">Seguir</a>
              </div>
            </section>
          ))}
        </SugestionsContent>
      </Sugestions>
    </Container>
  );
}
