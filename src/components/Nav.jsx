import { Link } from "react-router-dom/dist";

const Nav = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__navbar">
          <ul>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Nav;
