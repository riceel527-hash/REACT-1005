import { Link, useNavigate } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Navigates back to the home page route
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={handleHomeClick}>
          Movie App
        </Link>
      </div>
      <div className="navbar-links">
        <button className="nav-link nav-btn" onClick={handleHomeClick}>
          Home
        </button>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
        <a
          href="mailto:your.email@example.com?subject=Inquiry%20from%20Movie%20App"
          className="nav-link contact-link"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
