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
import { ListNotes } from './comps/ListNotes';

function App() {
  const dispatch = useDispatch();
  const note = useSelector(({ editor }) => editor.note);
  const popups = useSelector(({ popups }) => popups?.list);

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
      {/* <Sidebar /> */}
      {/* <div className="main">
        <Tabs tabNames={['Write', 'Preview']}>
          <Tab name="Write">
            <Editor />
          </Tab>
          <Tab name="Preview">
            <MarkdownPreview content={note && note.content} />
          </Tab>
        </Tabs>
      </div> */}
      <Tabs tabNames={['TODO', 'New ideas']}>
        <Tab name="TODO">
          <ListNotes />
        </Tab>
        <Tab name="New ideas"></Tab>
      </Tabs>
      <div className="new-note" onClick={newNote}>
        +
      </div>
      <Footer />
      <div className="popups">
        {popups?.map((popup) => (
          <Popup
            key={popup.note.id}
            title={popup.note.title}
            popupState={popup}
          >
            <Editor />
            {/* <MarkdownPreview content={popup.note.content} /> */}
            {/* <Tabs tabNames={['Write', 'Preview']}>
              <Tab name="Write">
              </Tab>
              <Tab name="Preview">
                <MarkdownPreview content={note && note.content} />
              </Tab>
            </Tabs> */}
          </Popup>
        ))}
      </div>
    </div>
  );
}

export default App;
