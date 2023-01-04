export const InputFiled = ({text, onChange, onSubmit}) => {
  return (
    <div>
      <form onSubmit={onSubmit} >
        <input type="text" value={text} onChange={onChange} />
        <input type="submit" value="追加" onSubmit={onSubmit} />
      </form>
    </div>
  )
}
