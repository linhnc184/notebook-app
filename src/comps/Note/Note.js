import { useDispatch } from 'react-redux';
import { actions as editorActions } from '../../features/editorSlice';
import { actions as popupsActions } from '../../features/popupsSlice';
import './Note.css';

const Note = ({ note }) => {
  const date = new Date(note.createdAt);
  const dispatch = useDispatch();
  const editNote = (note) => {
    dispatch(popupsActions.openPopup({ id: note.id }));
    dispatch(editorActions.setNote(note));
  };

  return (
    <div className="note" onClick={() => editNote(note)}>
      <div className="note--created-at">
        <span className="note--created-at--date">{date.getDate() || '?'}</span>
        <span className="note--created-at--month">
          {date.getMonth()}/{date.getFullYear().toString().substring(2)}
        </span>
      </div>
      <div className="note--title">{note.title}</div>
    </div>
  );
};

export default Note;
