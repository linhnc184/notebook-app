import { Tabs, Tab } from '../Tabs';
import { ListNotes } from '../ListNotes';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar--menu">
        <Tabs tabNames={['TODO', 'New ideas']}>
          <Tab name="TODO">
            <ListNotes />
          </Tab>
          <Tab name="New ideas"></Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Sidebar;
