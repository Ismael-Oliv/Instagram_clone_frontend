import { useRef, useState, useEffect, MouseEvent } from "react";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
import {
  Container,
  Content,
  ListItemContainer,
  ListItem,
  NextButton,
  PrevButton,
} from "./styles";

const ImagesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export function History() {
  const carousel = useRef<HTMLDivElement>(null);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [visible, isVisible] = useState(false);

  const handleLeftClick = (e: MouseEvent<HTMLElement>) => {
    if (carousel.current) {
      e.preventDefault();

      setCurrentScroll(
        (carousel.current.scrollLeft -=
          carousel.current.offsetWidth - carousel.current.offsetWidth * 0.3)
      );
    }
  };

  const handleRightClick = (e: MouseEvent<HTMLElement>) => {
    if (carousel.current) {
      e.preventDefault();

      setCurrentScroll(
        (carousel.current.scrollLeft +=
          carousel.current.offsetWidth - carousel.current.offsetWidth * 0.3)
      );
    }
  };

  useEffect(() => {
    if (carousel.current) {
      let div = carousel.current.childNodes.length - 1;

      let ElementOffsetLeft =
        carousel.current.children[div]?.getBoundingClientRect().left;

      let elementClie = carousel.current.children[div]?.clientWidth;
      let containerOffsetLeft = carousel.current.offsetLeft;

      let cBottom = currentScroll + carousel.current.clientWidth;

      let eTop = ElementOffsetLeft - containerOffsetLeft;
      let eBottom = eTop + elementClie;

      let isTotal = eTop >= currentScroll && eBottom <= cBottom;
      isVisible(isTotal);
    }
  }, [currentScroll]);

  return (
    <Container>
      <Content>
        <ListItemContainer ref={carousel}>
          {ImagesList.map((item, index) => (
            <ListItem key={item}>
              <a key={item} href="http://">
                <img
                  src="https://3.bp.blogspot.com/-UfQ36d-4aSk/UxCCXeL--OI/AAAAAAAAAnk/G_jyYkoFQ0c/s1600/_DSC4560.jpg"
                  alt="asdadas"
                />
                <span>Pessoa {index}</span>
              </a>
            </ListItem>
          ))}
        </ListItemContainer>

        {currentScroll > 0 && (
          <PrevButton onClick={(e) => handleLeftClick(e)}>
            <BiChevronLeftCircle />
          </PrevButton>
        )}

        {visible ? (
          ""
        ) : (
          <NextButton onClick={(e) => handleRightClick(e)}>
            <BiChevronRightCircle />
          </NextButton>
        )}
      </Content>
    </Container>
  );
}
