import { useDispatch } from 'react-redux';
import { actions as editorActions } from '../../features/editorSlice';
import { actions as popupsActions } from '../../features/popupsSlice';
import './Popup.css';

const Popup = (props) => {
  const dispatch = useDispatch();
  const closePopup = () => dispatch(popupsActions.closePopup({ id: props.id }));
  const newNote = () => dispatch(editorActions.setNote({ id: Date.now() }));

  return (
    <div className="popup">
      <div className="popup--header">
        <div className="popup--header--actions">
          <button onClick={newNote}>new</button>
          <button onClick={closePopup}>x</button>
        </div>
      </div>
      <div className="popup--body">{props.children}</div>
    </div>
  );
};

export default Popup;
