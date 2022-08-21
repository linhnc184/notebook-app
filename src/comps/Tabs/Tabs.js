import classNames from 'classnames';
import React, { useState } from 'react';
import Tab from './Tab';
import './Tabs.css';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.activeTab);

  const renderChildren = () => {
    return React.Children.map(props.children, (child, index) => {
      if (child.type === Tab || React.isValidElement(child)) {
        return React.cloneElement(child, {
          active: activeTab ? activeTab === child.props.name : !index
        });
      }
      return child;
    });
  };

  return (
    <div className="tabs">
      <div className={`tabs__header`}>
        {props.tabNames.map((tabName, i) => (
          <div
            key={tabName}
            onClick={() => setActiveTab(tabName)}
            className={classNames({
              tabs__header__name: true,
              active: activeTab ? activeTab === tabName : i === 0
            })}
          >
            {tabName}
          </div>
        ))}
      </div>
      <div className="tabs__container">{renderChildren()}</div>
    </div>
  );
};

export default Tabs;
