import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as popupsActions } from '../../features/popupsSlice';
import './Popup.css';

const Popup = ({ popupState, title, children }) => {
  const [target, setTarget] = useState(null);
  const handleMouseDown = (e) => setTarget(e.target.offsetParent);
  const dispatch = useDispatch();

  useEffect(() => {
    const mouse = { x: null, y: null }; // don't know when page load

    const handleMouseUp = () => {
      if (target) {
        dispatch(
          popupsActions.updatePopup({
            ...popupState,
            x: target.style.left,
            y: target.style.top
          })
        );
        setTarget(null);
      }
    };

    const handleMouseMv = (e) => {
      if (target) {
        if (mouse.x && mouse.y) {
          target.style.left = target.offsetLeft + (e.clientX - mouse.x) + 'px';
          target.style.top = target.offsetTop + (e.clientY - mouse.y) + 'px';
        }
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMv);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMv);
    };
  }, [target, popupState, dispatch]);

  return (
    <div className="popup" style={{ top: popupState.y, left: popupState.x }}>
      <div className="popup--header" onMouseDown={handleMouseDown}>
        {title}
      </div>
      <div className="popup--body">{children}</div>
    </div>
  );
};

export default Popup;
