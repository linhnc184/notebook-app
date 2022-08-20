import { useSelector } from 'react-redux';

const Tab = (props) => {
  const activeTab = useSelector(({ navActiveTab }) => navActiveTab.tabName);

  return (
    <div
      className="Tab"
      tabname={props.tabName}
      style={{ display: activeTab === props.tabName ? 'block' : 'none' }}
    >
      {props.children}
    </div>
  );
};

export default Tab;
