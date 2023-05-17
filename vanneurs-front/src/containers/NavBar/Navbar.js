function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#335C81" }}
    >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-white " href="/index">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/profil">
              Profil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/announcements">
              Annonces
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/create-announcement">
              Créer une annonce
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
