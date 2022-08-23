import { useSelector, useDispatch } from 'react-redux';
import { actions as editorActions } from '../../features/editorSlice';
import { actions as noteActions } from '../../features/notesSlice';
import { debounce, getFirstLine } from '../../utils';
import './Editor.css';

const Editor = () => {
  const dispatch = useDispatch();
  const editor = useSelector(({ editor }) => editor);
  const note = editor.note || {
    id: Date.now(), // temporary id
    title: '',
    content: '',
    createdAt: Date.now()
  };
  const content = note.content;

  /**
   * TODO: Save to database
   */
  const saveNote = (content) => {
    dispatch(
      noteActions.add({
        ...note,
        title: getFirstLine(content),
        content
      })
    );
  };

  /**
   * Create new note without save current changes
   */
  const newNote = () => {
    dispatch(editorActions.setNote(null));
  };

  /**
   * Save content to local storage every time it's changed
   * Resize editor height to fit content length
   */
  const handleInput = debounce((e) => {
    const textarea = e.target;

    if (textarea.offsetHeight < textarea.scrollHeight) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    dispatch(
      editorActions.setNote({
        ...note,
        title: getFirstLine(textarea.value),
        content: textarea.value
      })
    );
  });

  /**
   * Catch the shortcut:
   *
   * Save shortcut:
   * - on Mac: CMD+S
   * - other: Ctrl+S
   *
   * Create new note shortcut:
   * - on Mac: CMD+E
   * - other: Ctrl+E
   */
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLocaleLowerCase() === 's') {
      e.preventDefault();
      saveNote(e.target.value);
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLocaleLowerCase() === 'backspace') {
      e.preventDefault();
      newNote();
    }
  };

  return (
    <textarea
      key={note.id}
      className="editor"
      defaultValue={content}
      placeholder="don't miss any ideas..."
      autoFocus={true}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    ></textarea>
  );
};

export default Editor;
