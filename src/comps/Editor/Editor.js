import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as noteActions } from '../../features/notesSlice';
import { debounce, getFirstLine } from '../../utils';
import './Editor.css';

const Editor = (props) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const editor = useSelector(({ editor }) => editor);

  const note = editor.note || {
    id: Date.now(),
    title: getFirstLine(props.defaultContent),
    content: props.defaultContent
  };

  /**
   * Save content to local storage every time it's changed
   */
  const handleInput = debounce(() => {
    dispatch(
      noteActions.add({
        ...note,
        title: getFirstLine(ref.current.value),
        content: ref.current.value
      })
    );
  }, 0);

  return (
    <textarea
      key={note.id}
      ref={ref}
      className="editor"
      defaultValue={note.content}
      placeholder="don't miss any ideas..."
      autoFocus={true}
      onInput={handleInput}
    ></textarea>
  );
};

export default Editor;
