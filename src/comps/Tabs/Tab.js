const Tab = ({ name, active, children }) => {
  return (
    <div
      className="Tab"
      name={name}
      style={{ display: active ? 'block' : 'none' }}
    >
      {children}
    </div>
  );
};

export default Tab;
