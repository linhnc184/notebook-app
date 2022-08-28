import { useDispatch } from 'react-redux';
import { actions as editorActions } from '../../features/editorSlice';
import { actions as popupsActions } from '../../features/popupsSlice';
import { Button } from '../Button';
import './Popup.css';

const Popup = (props) => {
  const dispatch = useDispatch();
  const closePopup = () => dispatch(popupsActions.closePopup({ id: props.id }));
  const newNote = () => dispatch(editorActions.setNote({ id: Date.now() }));

  return (
    <div className="popup">
      <div className="popup--header">
        <div className="popup--title">{props.title}</div>
        <div className="popup--actions">
          <Button className="new-note" onClick={newNote}>
            <i className="material-icons">add</i>
          </Button>
          <Button className="close-popup" onClick={closePopup}>
            <i className="material-icons">close</i>
          </Button>
        </div>
      </div>
      <div className="popup--body">{props.children}</div>
    </div>
  );
};

export default Popup;
