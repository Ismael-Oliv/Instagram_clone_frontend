//Import Icons
import { HiDotsHorizontal } from "react-icons/hi";
import { GrEmoji } from "react-icons/gr";
import HeartBoldIcon from "../../assets/like-heart-bold.svg";
import MessageIcon from "../../assets/add-message.svg";
import ShareBoldIcon from "../../assets/share-message.svg";
import MarkBoldIcon from "../../assets/mark-bold.svg";

//Import Style
import { Container, Header, Picture, Footer, AddComments, Like } from "./styles";

export function Post() {
  return (
    <Container>
      <Header>
        <h1>Feed</h1>
        <HiDotsHorizontal />
      </Header>
      <Picture>
        <img
          src="https://3.bp.blogspot.com/-UfQ36d-4aSk/UxCCXeL--OI/AAAAAAAAAnk/G_jyYkoFQ0c/s1600/_DSC4560.jpg"
          alt="asdadas"
        />
      </Picture>

      <Footer>
        <Like>
          <article>
            <img src={HeartBoldIcon} alt="like" />
            <img src={MessageIcon} alt="Add comment" />
            <img src={ShareBoldIcon} alt="Share post" />
          </article>
          <img src={MarkBoldIcon} alt="Mark post" />
        </Like>

        <AddComments>
          <div>
            <GrEmoji />
            <input type="text" placeholder="Adicione um comentário..." />
            <button>Publicar</button>
          </div>
        </AddComments>
      </Footer>
    </Container>
  );
}
