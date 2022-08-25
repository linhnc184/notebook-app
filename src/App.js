import { useSelector, useDispatch } from 'react-redux';
import { Editor } from './comps/Editor';
import { MarkdownPreview } from './comps/MarkdownPreview';
import { Tabs, Tab } from './comps/Tabs';
import { Header } from './comps/Header';
import { Sidebar } from './comps/Sidebar';
import { Footer } from './comps/Footer';
import { actions as editorActions } from './features/editorSlice';
import classNames from 'classnames';
import Popup from './comps/Popup/Popup';

function App() {
  const dispatch = useDispatch();
  const note = useSelector(({ editor }) => editor.note);
  const popups = useSelector(({ notePopups }) => notePopups.popups);

  const newNote = () => {
    dispatch(
      editorActions.setNote({
        id: Date.now(), // temporary id
        title: '',
        content: '',
        createdAt: Date.now()
      })
    );
  };

  return (
    <div className={classNames({ app: true, 'has-note': !!note })}>
      <Header />
      <Sidebar />
      <div className="main">
        <Tabs tabNames={['Write', 'Preview']}>
          <Tab name="Write">
            <Editor />
          </Tab>
          <Tab name="Preview">
            <MarkdownPreview content={note && note.content} />
          </Tab>
        </Tabs>
      </div>
      <div className="new-note" onClick={newNote}>
        +
      </div>
      <Footer />
      {popups.map((popup) => (
        <Popup key={popup.note.id} title={popup.note.title}>
          <MarkdownPreview content={popup.note.content} />
        </Popup>
      ))}
    </div>
  );
}

export default App;
