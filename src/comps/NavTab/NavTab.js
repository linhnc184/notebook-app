import './NavTab.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { active } from './navTabSlice';
import { useEffect } from 'react';

const NavTab = (props) => {
  const tabNames = props.tabNames || [];
  const activeTab = useSelector(({ navActiveTab }) => navActiveTab.tabName);
  const dispatch = useDispatch();
  const handleHeaderClick = (tabName) => dispatch(active(tabName));

  useEffect(() => {
    dispatch(active(props.activeTab));
  }, [props, dispatch]);

  return (
    <div className="nav-tab">
      <div className={`nav-tab--header ${activeTab}`}>
        {tabNames.map((tabName, i) => (
          <div
            key={tabName}
            onClick={() => handleHeaderClick(tabName)}
            className={classNames({
              'nav-tab--name': true,
              active: activeTab ? activeTab === tabName : i === 0
            })}
          >
            {tabName}
          </div>
        ))}
      </div>
      <div className="nav-tab--tabs">{props.children}</div>
    </div>
  );
};

export default NavTab;
