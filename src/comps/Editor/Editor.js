import { useSelector, useDispatch } from 'react-redux';
import { setContent } from './contentSlice';
import './Editor.css';

const Editor = () => {
  const content = useSelector((state) => state.editorContent.content);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const textarea = e.target;

    if (textarea.offsetHeight < textarea.scrollHeight) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    dispatch(setContent(textarea.value));
  };

  return (
    <textarea
      className="Editor"
      value={content}
      placeholder="don't miss any ideas..."
      autoFocus={true}
      onInput={handleInput}
    ></textarea>
  );
};

export default Editor;
