import './Header.css';
import Clock from '../Clock';

const Header = () => {
  return (
    <header className="header">
      <h3>Hi, have a nice day!</h3>
      <Clock />
    </header>
  );
};

export default Header;
