import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../config";

export const useTodoCRUD = () => {
  const [todos, setTodos] = useState(Array);

  useEffect(() => {
    axios.get(API_URL)
    .then((result)=> {
      setTodos(result.data);
    });
  }, []);

  const handleOnSubmit = (text) => {
    if (!text) return;

    const newTodo = {
      title: text,
      id: new Date().getTime(),
      checked: false,
      removed: false
    };

    setTodos([newTodo, ...todos]);
  };


  const handleOnEdit = (id = Number, title = String) => {
    const deepCopy = todos.map((todo) => ({...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleOnCheck = (id = number, checked = boolean) => {
    const deepCopy = todos.map((todo) => ({...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleOnRemove = (id = number, removed = boolean) => {
    const deepCopy = todos.map((todo) => ({...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleOnEmpty = () => {
    const newTodos = todos.filter((todo) => !todo.removed);
    setTodos(newTodos);
  };

  return {
    todos,
    handleOnSubmit,
    handleOnEdit,
    handleOnCheck,
    handleOnRemove,
    handleOnEmpty
  };
}
