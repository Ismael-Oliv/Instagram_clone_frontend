import LogoIMG from "../../assets/logo.png";
import HouseIcon from "../../assets/house.svg";
import MessageIcon from "../../assets/message.svg";
import MommentsIcon from "../../assets/momments.svg";
import Notifications from "../../assets/heart.svg";
import ProfileImage from "../../assets/profile_image.jpg";

import {
  Container,
  LogoContainer,
  Menu,
  MenuContainer,
  MenuContent,
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
        <div>
          <input type="search" name="search" id="search" />
        </div>
        <MenuContainer>
          <MenuContent>
            <a href="http://localhost:3000/">
              <img src={HouseIcon} alt="home" />
            </a>
            <a href="http://localhost:3000/">
              <img src={MessageIcon} alt="messages" />
            </a>
            <a href="http://localhost:3000/">
              <img src={MommentsIcon} alt="momments" />
            </a>
            <a href="http://localhost:3000/">
              <img src={Notifications} alt="notifications" />
            </a>
            <a href="http://localhost:3000/">
              <img src={ProfileImage} alt="profile" />
            </a>
          </MenuContent>
        </MenuContainer>
      </Menu>
    </Container>
  );
}
