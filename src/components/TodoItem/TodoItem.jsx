export const TodoItem = ({todo, handleOnCheck, handleOnEdit, handleOnRemove}) => {
  return (
    <div>
      <input
        type="checkbox"
        disabled = {todo.removed}
        checked={todo.checked}
        onChange={handleOnCheck}
      />
      <input
        type="text"
        disabled = {todo.checked || todo.removed}
        value={todo.value}
        onChange={handleOnEdit}
      />
      <button onClick={handleOnRemove}>
        {todo.removed ? '復元' : '削除'}
      </button>
    </div>
  )
}
