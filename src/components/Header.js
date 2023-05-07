import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-Container">
      <div className="logo-main">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="Nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
