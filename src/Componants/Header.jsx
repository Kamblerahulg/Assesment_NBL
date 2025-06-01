import { Link } from 'react-router-dom';

const Header = ({ isGrid, toggleView }) => (
  <header className="header">
    <h1>Product Listing</h1>
    <div className="button-group">
      <button onClick={toggleView}>
        {isGrid ? 'Table View' : 'Grid View'}
      </button>
      <Link to="/cart" className="button-link">Cart</Link>
    </div>
  </header>
);

export default Header;
