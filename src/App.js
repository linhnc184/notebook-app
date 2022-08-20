import './App.css';
import Header from './comps/Header';
import Editor from './comps/Editor/Editor';
import ListNotes from './comps/ListNotes';
import NavTab from './comps/NavTab';
import Tab from './comps/NavTab/Tab';
import Preview from './comps/Editor/Preview';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <NavTab tabNames={['Write', 'Preview']} activeTab="Write">
          <Tab tabName="Write">
            <Editor />
          </Tab>
          <Tab tabName="Preview">
            <Preview />
          </Tab>
        </NavTab>
        <ListNotes />
      </div>
    </div>
  );
}

export default App;
