import './Header.css';
import Clock from '../Clock';

const Header = () => {
  return (
    <header className="header">
      <img src="logo128.png" alt="notebook assistant" className="logo" />
      <h4>Hi,<br/>have a nice day!</h4>
      <Clock />
    </header>
  );
};

export default Header;
