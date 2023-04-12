// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="nav-menu">
    <div className="logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="img"
      />
      <h1 className="wave">Wave</h1>
    </div>
    <div className="link-list">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </div>
  </ul>
)

export default Header
