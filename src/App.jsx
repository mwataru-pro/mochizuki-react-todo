import {useState} from 'react';

export const App = () => {
  const [text, setText] = useState(String);

  const [todos, setTodos] = useState(Array);

  const handleOnSubmit = () => {
    if (!text) return;

    const newTodo = {
      value: text,
      id: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
    setText('');
  };

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleOnEdit = (id = Number, value = String) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => handleOnChange(e)}
        />
        <input type="submit" value="追加" onSubmit={handleOnSubmit} />
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.value}
                onChange={(e) => handleOnEdit(todo.id, e.target.value)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
