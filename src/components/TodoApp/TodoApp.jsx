import React from 'react';
import { useState } from 'react';
import { InputFiled  } from '../InputField';
import { TodoItem  } from '../TodoItem';
import { useTodoCRUD } from "../../hooks/useTodoCRUD";
import { useInput } from "../../hooks/useInput";

export const TodoApp = () => {
  const {
    text,
    handleOnChange,
    resetText
  } = useInput();
  const {
    todos,
    handleOnSubmit,
    handleOnEdit,
    handleOnCheck,
    handleOnRemove,
    handleOnEmpty
  } = useTodoCRUD();
  const [filter, setFilter] = useState('all');
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'all':
        return !todo.removed;
      case 'checked':
        return todo.checked && !todo.removed;
      case 'unchecked':
        return !todo.checked && !todo.removed;
      case 'removed':
        return todo.removed;
      default:
        return todo;
    }
  });

  return (
    <div>
      <select defaultValue="all" onChange={(e) => setFilter(e.target.value)}>
        <option value="all">すべてのタスク</option>
        <option value="checked">完了したタスク</option>
        <option value="unchecked">現在のタスク</option>
        <option value="removed">ごみ箱</option>
      </select>
      {filter === 'removed' ? (
        <button
        disabled={todos.filter((todo) => todo.removed).length === 0}
        onClick={handleOnEmpty}
        >
          ごみ箱を空にする
        </button>
      ) : (
        filter !== 'checked' && (
          <InputFiled
            text={text}
            onChange={handleOnChange}
            onSubmit={(e) => {
              e.preventDefault();
              handleOnSubmit(text);
              resetText();
            }}
          />
        )
      )}
      <ul>
        {filteredTodos.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                handleOnCheck={() => handleOnCheck(todo.id, todo.checked)}
                handleOnEdit={(e) => handleOnEdit(todo.id, e.target.value)}
                handleOnRemove={() => handleOnRemove(todo.id, todo.removed)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
