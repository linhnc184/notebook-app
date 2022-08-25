import { useEffect, useState } from 'react';
import { actions as notePopupsSlice } from '../../features/notePopupsSlice';
import './Popup.css';

const Popup = ({ title, children }) => {
  const [target, setTarget] = useState(null);
  const handleMouseDown = (e) => setTarget(e.target.offsetParent);

  useEffect(() => {
    const handleWindowMouseUp = () => {
      setTarget(null);
    };
    const handleWindowMouseMove = (e) => {
      if (target) {
        target.style.top = e.clientY - 5 + 'px';
        target.style.left = e.clientX - target.offsetWidth / 2 + 'px';
      }
    };

    window.addEventListener('mouseup', handleWindowMouseUp);
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mouseup', handleWindowMouseUp);
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, [target]);

  return (
    <div className="popup">
      <div className="popup--header" onMouseDown={handleMouseDown}>
        {title}
      </div>
      <div className="popup--body">{children}</div>
    </div>
  );
};

export default Popup;
