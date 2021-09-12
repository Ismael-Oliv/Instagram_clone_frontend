import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { HiDotsHorizontal, HiOutlinePaperAirplane } from "react-icons/hi";
import { GrEmoji } from "react-icons/gr";
import {
  Container,
  Header,
  Picture,
  Footer,
  AddComments,
  Like,
} from "./styles";

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
            <AiOutlineHeart />
            <FaRegComment />
            <HiOutlinePaperAirplane />
          </article>
          <IoBookmarkOutline />
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
