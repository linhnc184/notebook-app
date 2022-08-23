import './Header.css';
import Clock from '../Clock';

const Header = () => {
  return (
    <header className="header">
      <img src="logo128.png" alt="notebook assistant" className="logo" />
      <span>Hi, have a nice day!</span>
      <Clock />
    </header>
  );
};

export default Header;
