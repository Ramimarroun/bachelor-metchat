import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import logo from "../assets/img/Logo.svg";

function AdminNav() {
  /* Toggle Nav*/
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className="nav-center">
      <div className="nav-header">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="nav-items">
          <Link className="item" to="/admin/brukere">
            Brukere
          </Link>
          <Link className="item" to="/admin/samtaler">
            Samtaler
          </Link>
          <Link className="item" to="/logut">
            Logg ut
          </Link>
        </div>

        <HiBars3 className="nav-toggle" onClick={toggleLinks} />
      </div>
      <div
        className={
          showLinks ? "links-container show-container" : "links-container"
        }
      >
        <Link className="item" to="/admin/brukere">
          Brukere
        </Link>
        <Link className="item" to="/admin/samtaler">
          Samtaler
        </Link>
        <Link className="item" to="/logut">
          Logg ut
        </Link>
      </div>
    </nav>
  );
}

export default AdminNav;
