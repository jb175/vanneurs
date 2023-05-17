import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex justify-center w-full h-screen bg-red-400">
      <Link to="/">
        <button>Retour à la page d'accueil</button>
      </Link>
    </div>
  );
}