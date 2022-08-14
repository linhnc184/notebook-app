import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <label for="noteTitle">Title</label>
          <input id="noteTitle" type="text" />
        </div>
        <div>
          <label for="noteContent">Content2</label>
          <textarea id="noteContent"></textarea>
        </div>
      </form>
    </div>
  );
}

export default App;
