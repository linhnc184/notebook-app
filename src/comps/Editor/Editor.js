import { useSelector, useDispatch } from 'react-redux';
import { setDisplay } from '../../features/editorSlice';
import './Editor.css';

const Editor = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.editor);

  /**
   * TODO: Save to database
   */
  const save = (content) => {
    console.log('save content', content);
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

    dispatch(setDisplay({ content: textarea.value }));
  };

  /**
   * Catch the shortcut key combind
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
