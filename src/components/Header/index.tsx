//IMport Icons
import { FiSearch } from "react-icons/fi";

//Import images
import LogoIMG from "../../assets/logo.png";
import HouseIcon from "../../assets/house.svg";
import MessageIcon from "../../assets/message.svg";
import MommentsIcon from "../../assets/momments.svg";
import Notifications from "../../assets/heart.svg";
import ProfileImage from "../../assets/profile_image.jpg";
import AddPost from "../../assets/add.svg";

//Import componentts
import { SearchInput } from "../SearchInput";

//Import styles
import {
  Container,
  LogoContainer,
  Menu,
  IconsContainer,
  IconsContent,
  ProfilePicture,
} from "./styles";

export function Header() {
  return (
    <Container>
      <Menu>
        <LogoContainer>
          <a href="http://localhost:3000/">
            <img src={LogoIMG} alt="instagram" />
          </a>
        </LogoContainer>
        <article>
          <SearchInput icon={FiSearch} name="search" id="search" />
        </article>

        <IconsContainer>
          <IconsContent>
            <a href="http://localhost:3000/">
              <img src={HouseIcon} alt="home" />
            </a>
            <a href="http://localhost:3000/">
              <img src={MessageIcon} alt="messages" />
            </a>
            <a href="http://localhost:3000/">
              <img src={AddPost} alt="add post" />
            </a>
            <a href="http://localhost:3000/">
              <img src={MommentsIcon} alt="momments" />
            </a>
            <a href="http://localhost:3000/">
              <img src={Notifications} alt="notifications" />
            </a>
            <ProfilePicture href="http://localhost:3000/">
              <img src={ProfileImage} alt="profile" />
            </ProfilePicture>
          </IconsContent>
        </IconsContainer>
      </Menu>
    </Container>
  );
}
