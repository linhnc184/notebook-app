import { useSelector } from 'react-redux';
import { Editor } from './comps/Editor';
import { MarkdownPreview } from './comps/MarkdownPreview';
import { Tabs, Tab } from './comps/Tabs';
import { Header } from './comps/Header';
import { Sidebar } from './comps/Sidebar';
import { Footer } from './comps/Footer';

function App() {
  const note = useSelector(({ editor }) => editor.note);

  return (
    <div className="app">
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
      <Footer />
    </div>
  );
}

export default App;
