import { useDispatch } from 'react-redux';
import { actions as popupsActions } from '../../features/popupsSlice';
import { Button } from '../Button';
import './Popup.css';

const Popup = (props) => {
  const dispatch = useDispatch();
  const closePopup = () => dispatch(popupsActions.closePopup({ id: props.id }));

  return (
    <div className="popup">
      <div className="popup--header">
        <div className="popup--actions">
          <Button className="close-popup" onClick={closePopup}>
            <i className="material-icons">arrow_back</i>
          </Button>
        </div>
      </div>
      <div className="popup--body">{props.children}</div>
    </div>
  );
};

export default Popup;
