import { useState } from "react";
import { useAuthUser, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function Login() {
  const authUser = useAuthUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useSignIn();

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const response = {
      data: {
        isSuccess: true,
        access_token: "dzadzadza",
        refresh_token: "dzad",
        email: "test@test.com",
      },
    };
    if (response.data.isSuccess) {
      signIn({
        token: response.data.access_token,
        refreshToken: response.data.refresh_token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: response.data.email },
        refreshTokenExpireIn: 60,
      });
      navigate("/home");
    }
  };
  return (
    <div className="container mt-5">
      <h2>Formulaire de connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>E-mail :</label>
          <input
            value={username}
            onInput={(e) => updateUsername(e)}
            className="w-full"
            label="username"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <label>Mot de passe :</label>
          <input
            value={password}
            onInput={(e) => updatePassword(e)}
            className="w-full"
            label="password"
            type="password"
            variant="outlined"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;
