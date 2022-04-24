import { useRef, useState, useEffect, MouseEvent, useCallback } from "react";
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
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(true);

  const handleLeftClick = useCallback((e: MouseEvent<HTMLElement>) => {
    if (carousel.current) {
      e.preventDefault();

      setCurrentScroll((prev) => prev - 200);
      carousel.current.scrollLeft -= 200;
    }
  }, []);

  const handleRightClick = useCallback((e: MouseEvent<HTMLElement>) => {
    if (carousel.current) {
      e.preventDefault();

      carousel.current.scrollLeft += 200;
      setCurrentScroll((prev) => prev + 200);
    }
  }, []);

  useEffect(() => {
    if (carousel.current) {
      const ScrollLeft = carousel.current.getBoundingClientRect().left;
      const ScrollWidth = carousel.current.clientWidth;

      if (currentScroll > 0) {
        setIsStart(true);
      } else {
        setIsStart(false);
      }

      if (ScrollLeft + currentScroll >= ScrollWidth) {
        setIsEnd(false);
      } else {
        setIsEnd(true);
      }
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
        {isStart && (
          <PrevButton onClick={(e) => handleLeftClick(e)}>
            <BiChevronLeftCircle />
          </PrevButton>
        )}
        {isEnd && (
          <NextButton onClick={(e) => handleRightClick(e)}>
            <BiChevronRightCircle />
          </NextButton>
        )}
      </Content>
    </Container>
  );
}
