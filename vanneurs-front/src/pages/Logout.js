import { useSignOut } from "react-auth-kit";

function Logout() {
  const signOut = useSignOut();
  const onLogout = () => {
    signOut();
  };
  return (
    <div>
      <button onClick={() => onLogout()}>Se déconnecter</button>
    </div>
  );
}

export default Logout;
