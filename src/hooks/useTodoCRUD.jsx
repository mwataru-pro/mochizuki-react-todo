import { useState } from "react";

export const useTodoCRUD = () => {
  const [todos, setTodos] = useState(Array);

  const handleOnSubmit = (text) => {
    if (!text) return;

    const newTodo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
      removed: false
    };

    setTodos([newTodo, ...todos]);
    setText('');
  };


  const handleOnEdit = (id = Number, value = String) => {
    const deepCopy = todos.map((todo) => ({...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
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

  const handelOnRemove = (id = number, removed = boolean) => {
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
    handelOnRemove,
    handleOnEmpty
  };
}
