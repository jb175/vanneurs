import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";

function NavBar() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#335C81" }}
      aria-label="Fifth navbar example"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Vanneurs
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {(isAuthenticated() && (
          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/"} activeClassName="active" className="nav-link">
                  Annonces
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/my-house"}
                  activeClassName="active"
                  className="nav-link"
                >
                  Ma maison
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/offers"}
                  activeClassName="active"
                  className="nav-link"
                >
                  Offres
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/exchanges"}
                  activeClassName="active"
                  className="nav-link"
                >
                  Echanges
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to={"/profil"}
                      activeClassName="active"
                      className="dropdown-item"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/settings"}
                      activeClassName="active"
                      className="dropdown-item"
                    >
                      Paramètres
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/logout"}
                      activeClassName="active"
                      className="dropdown-item"
                    >
                      Déconnexion
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )) || (
          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/login"}
                  activeClassName="active"
                  className="nav-link"
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <form role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
