import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../config";

export const useTodoCRUD = () => {
  const [todos, setTodos] = useState(Array);

  useEffect(() => {
    axios.get(API_URL)
    .then((result)=> {
      setTodos(result.data);
    })
    .catch(error => console.log(error))
  }, []);

  const handleOnSubmit = (text) => {
    if (!text) return;

    const newTodo = {
      title: text,
      completed: false,
      removed: false
    };

    createTodo(newTodo);
  };

  const createTodo = (todo) => {
    axios.post(`${API_URL}`, {
      title: todo.title,
      completed: todo.completed
    })
    .then(response => {
      setTodos([...todos, response.data])
    })
    .catch(error => {
      console.log(error);
    });
  }


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

  const handleOnRemove = (id = number) => {
    const deepCopy = todos.map((todo) => ({...todo }));

    deleteTodo(id);
  }

  const deleteTodo = (id) => {
    axios.delete(`${API_URL}/${id}`)
    .then(response => {
      setTodos(todos.filter(todo => todo.id !== id))
    })
    .catch(error => console.log(error))
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
