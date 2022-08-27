import { useDispatch, useSelector } from 'react-redux';
import { actions as noteActions } from '../../features/notesSlice';
import { actions as popupsActions } from '../../features/popupsSlice';
import './ListNotes.css';

const ListNotes = () => {
  const { list } = useSelector(({ notes }) => notes);
  const dispatch = useDispatch();

  const removeNote = (note) => {
    dispatch(noteActions.remove(note));
  };

  const addPopup = (note) => {
    dispatch(popupsActions.addPopup({ id: note.id, note }));
  };

  return (
    <div className="list-notes">
      {list.map((note) => (
        <div className="note" key={note.id}>
          <div className="title" onClick={() => addPopup(note)}>
            {note.title || '(empty)'}
          </div>
          <div className="date">{new Date(note.createdAt).toDateString()}</div>
          <button className="del-note" onClick={() => removeNote(note)}>
            ␡
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListNotes;
