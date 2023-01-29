export const TodoItem = ({todo, handleOnCheck, handleOnEdit, handleOnDiscard}) => {
  return (
    <div>
      <input
        type="checkbox"
        disabled = {todo.removed}
        checked={todo.completed}
        onChange={handleOnCheck}
      />
      <input
        type="text"
        disabled = {todo.checked || todo.removed}
        value={todo.title}
        onChange={handleOnEdit}
      />
      <button onClick={handleOnDiscard}>
        {todo.removed ? '復元' : '削除'}
      </button>
    </div>
  )
}
