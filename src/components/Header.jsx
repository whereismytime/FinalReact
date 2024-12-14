import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>
      <nav>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/tasks" style={{ margin: '0 10px' }}>Tasks</Link>
        <Link to="/faq" style={{ margin: '0 10px' }}>FAQ</Link>
      </nav>
    </header>
  );
};

export default Header;
