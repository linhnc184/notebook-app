import { useSelector } from 'react-redux';
import { Editor } from './comps/Editor';
import { MarkdownPreview } from './comps/MarkdownPreview';
import { Tabs, Tab } from './comps/Tabs';
import Header from './comps/Header';
import ListNotes from './comps/ListNotes';
import './App.css';

function App() {
  const note = useSelector(({ editor }) => editor.note);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Tabs tabNames={['Write', 'Preview']}>
          <Tab name="Write">
            <Editor />
          </Tab>
          <Tab name="Preview">
            <MarkdownPreview content={note && note.content} />
          </Tab>
        </Tabs>

        <Tabs tabNames={['TODO', 'New ideas']}>
          <Tab name="TODO">
            <ListNotes />
          </Tab>
          <Tab name="New ideas"></Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
