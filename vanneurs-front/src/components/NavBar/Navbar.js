import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#335C81" }} aria-label="Fifth navbar example">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Vanneurs</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample05">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={"/"} activeClassName="active" className="nav-link" aria-current="page">Page d'acceuil</Link>
            </li>
            <li class="nav-item">
              <Link to={"/annoucements"} activeClassName="active" className="nav-link">Annonces</Link>
            </li>
            <li class="nav-item">
              <Link to={"#"} activeClassName="active" className="nav-link">Ma maison</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Profile</a>
              <ul class="dropdown-menu">
                <li><Link to={"/profil"} activeClassName="active" className="dropdown-item">Profile</Link></li>
                <li><Link to={"#"} activeClassName="active" className="dropdown-item">Paramètres</Link></li>
                <li><Link to={"#"} activeClassName="active" className="dropdown-item">Déconnection</Link></li>
              </ul>
            </li>
          </ul>
          <form role="search">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;