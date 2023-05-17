function NavBar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#335C81" }}
    >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-white " href="/index">
              Accueil
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/profil">
              Profil
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/announcements">
              Annonces
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/create-announcement">
              Créer une annonce
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
