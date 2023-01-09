import { useState } from "react";

export const useFilter = () => {
  const [filter, setFilter] = useState('all');

  const handleOnFilter = (e) => {
    setFilter(e.target.value);
  }

  return {
    filter,
    handleOnFilter
  }
}
