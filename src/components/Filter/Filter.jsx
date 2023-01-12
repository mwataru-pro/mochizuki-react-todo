export const Filter = ({onChange}) => {
  return (
    <div>
      <select defaultValue="all" onChange={onChange}>
        <option value="all">すべてのタスク</option>
        <option value="checked">完了したタスク</option>
        <option value="unchecked">現在のタスク</option>
        <option value="removed">ごみ箱</option>
      </select>
    </div>
  )
}
