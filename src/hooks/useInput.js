import { useState } from "react";

export const useInput = () => {
  const [text, setText] = useState(String);

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const resetText = () => {
    setText('');
  }

  return {
    text,
    handleOnChange,
    resetText
  }
}
