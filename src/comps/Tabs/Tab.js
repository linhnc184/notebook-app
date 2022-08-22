const Tab = ({ name, active, children }) => {
  const empty = <div style={{ padding: '20px' }}></div>;
  return (
    <div
      className="tab"
      name={name}
      style={{ display: active ? 'block' : 'none' }}
    >
      {children || empty}
    </div>
  );
};

export default Tab;
