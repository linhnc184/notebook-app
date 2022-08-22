import { useSelector, useDispatch } from 'react-redux';
import { setNote } from '../../features/editorSlice';
import { actions as noteActions } from '../../features/notesSlice';
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
  const save = () => {
    dispatch(noteActions.add(note));
    dispatch(setNote(null));
  };

  /**
   * Save content to local storage every time it's changed
   * Resize editor height to fit content length
   */
  const handleInput = (e) => {
    const textarea = e.target;

    if (textarea.offsetHeight < textarea.scrollHeight) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    dispatch(
      setNote({
        ...note,
        title: textarea.value.substring(0, 100),
        content: textarea.value
      })
    );
  };

  /**
   * Catch the shortcut:
   *
   * Save shortcut:
   * - on Mac: CMD+S
   * - other: Ctrl+S
   */
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && String(e.key).toLocaleLowerCase() === 's') {
      e.preventDefault();
      save(e.target.value);
    }
  };

  return (
    <textarea
      className="editor"
      value={content}
      placeholder="don't miss any ideas..."
      autoFocus={true}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    ></textarea>
  );
};

export default Editor;
