import './Note.css';

const Note = ({ note }) => {
  return (
    <div className="note">
      <div className="title">{note.title}</div>
      <div className="date">{note.createdAt}</div>
      <div className="content">{note.content || '(blank)'}</div>
    </div>
  );
};

export default Note;
