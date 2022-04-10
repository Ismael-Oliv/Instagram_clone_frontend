import { ComponentType, InputHTMLAttributes, useCallback, useRef, useState } from "react";
import { IconBaseProps } from "react-icons";

import { Container, InputElement } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: ComponentType<IconBaseProps>;
}

export function SearchInput({ name, icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFocus, setInputFocus] = useState(true);

  const handleInputOnFocus = useCallback(() => {
    setInputFocus(false);

    if (inputRef.current) {
      inputRef.current.type = "search";
    }
  }, []);

  const handleInputOnBlur = useCallback(() => {
    setInputFocus(true);
  }, []);

  return (
    <Container>
      {inputFocus && <Icon size={15} />}

      <InputElement
        {...rest}
        ref={inputRef}
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
        placeholder="Pesquisar"
      />
    </Container>
  );
}
