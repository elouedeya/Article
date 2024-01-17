import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
const Navbar = () => {
  const { products, title } = useContext(ProductContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    `nav-link ${navData.isActive ? "active" : " "}`
                  }
                  to="/"
                >
                  Home ({products.length})
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    `nav-link ${navData.isActive ? "active" : " "}`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    `nav-link ${navData.isActive ? "active" : " "}`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    `nav-link ${navData.isActive ? "active" : " "}`
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
