//import Logo from "../assets/images/newLogo-white.png";
import "./Header.scss";
import ResponsiveAppBar from "./ResponsiveAppBar";

function Header() {
  return (
    <div>
      <ResponsiveAppBar />
      {/* <div className='header'>
        <a href='#'>
          {" "}
          <img src={Logo} alt='HealthLy Logo' />
        </a>

        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/services'>Services</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div> */}
    </div>
  );
}

export default Header;
