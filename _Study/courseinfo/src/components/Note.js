const Note = ({ note, toggleImportance}) => {
  const label = note.important
  const labelText = label ? "important" : "non important"
  return (
    <li className="note">
      {note.content}
      <button onClick={toggleImportance}>{labelText}</button>
    </li>
  )
}

export default Note