import React, { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });
  const signIn = useSignIn();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formLogin)
    })
    .then((response) => response.json())
    .then((user) => {
      if (user.authorized) {
        signIn({
          token: user.access_token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { person: user.data },
        });
        navigate("/");
      }
      else {
        console.log("error in register")
      }
    });

  };
  return (

    <div className="container mt-5">
      <h2>Formulaire de connexion</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Adresse email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formLogin.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Mot de passe
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formLogin.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Se connecter
      </button>
        <div>
          <p>
            <Link
              to={"/register"}
            >
            Vous n'avez pas de compte ? Rendez-vous sur cette page !
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
