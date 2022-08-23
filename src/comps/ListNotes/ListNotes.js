import { useDispatch, useSelector } from 'react-redux';
import { actions as noteActions } from '../../features/notesSlice';
import { actions as editorActions } from '../../features/editorSlice';
import './ListNotes.css';

const ListNotes = () => {
  const { list } = useSelector(({ notes }) => notes);
  const dispatch = useDispatch();
  const removeNote = (note) => dispatch(noteActions.remove(note));
  const editNote = (note) => dispatch(editorActions.setNote(note));

  return (
    <div className="list-notes">
      {list.map((note) => (
        <div className="note" key={note.id}>
          <div className="title" onClick={() => editNote(note)}>
            {note.title || '(empty)'}
          </div>
          <div className="date">{new Date(note.createdAt).toDateString()}</div>
          <button
            className="del-note"
            onClick={() => removeNote(note)}
          >␡</button>
        </div>
      ))}
    </div>
  );
};

export default ListNotes;
