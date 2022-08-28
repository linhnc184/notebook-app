import { useSelector, useDispatch } from 'react-redux';
import { Editor } from './comps/Editor';
import { Header } from './comps/Header';
import { actions as editorActions } from './features/editorSlice';
import { actions as popupsActions } from './features/popupsSlice';
import { Note } from './comps/Note';
import { Popup } from './comps/Popup';

function App() {
  const dispatch = useDispatch();
  const notes = useSelector(({ notes }) => notes?.list);
  const popups = useSelector(({ popups }) => popups?.list);

  const newNote = () => {
    dispatch(popupsActions.openPopup({ id: Date.now() }));
    dispatch(editorActions.setNote({ id: Date.now() }));
  };

  return (
    <div className="app">
      <Header />

      <div className="list-notes">
        {notes?.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>

      <button type="button" className="new-note" onClick={newNote}></button>

      {popups &&
        popups.map((popup) => (
          <Popup key={popup.id} id={popup.id}>
            <Editor />
          </Popup>
        ))}
    </div>
  );
}

export default App;
