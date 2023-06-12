import { useAuthUser, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function Profil() {
  const auth = useAuthUser();
  const signOut = useSignOut();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("_auth");
    localStorage.removeItem("_auth_state");
    localStorage.removeItem("_auth_storage");
    localStorage.removeItem("_auth_type");
    navigate("/login");
    signOut();
  }

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mt-4">
              <div className="card-body">
                <h2 className="card-title">{auth().person.firstName} {auth().person.lastName}</h2>
                <h5 className="card-subtitle mb-2 text-muted">Numéro de téléphone : {auth().person.phoneNumber}</h5>
                <p className="card-text">{auth().person.role === 'MEMBER' ? 'Membre' : 'Administrateur'}</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <button onClick={logout} className="btn btn-primary">Se déconnecter</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Profil;
