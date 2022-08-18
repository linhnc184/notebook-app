import './App.css';
import Header from './comps/Header';
import Editor from './comps/Editor/Editor';
import ListNotes from './comps/ListNotes';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Editor />
        <ListNotes />
      </div>
    </div>
  );
}

export default App;
