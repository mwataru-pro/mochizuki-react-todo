import { useState } from "react";

export const useInput = () => {
  const [text, setText] = useState(String);

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  return {
    text,
    handleOnChange
  }
}
