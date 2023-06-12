import React, { useState } from 'react';

import { apiAddress } from '../const';

function Register() {
    const [formRegister, setFormRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormRegister((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formRegister);
        fetch(apiAddress+'/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formRegister)
        })
        .then((response) => window.location.href = '/login')
        .catch((error => console.log(error)));
      };
     
  return (
    <div className="container mt-5">
        <h2>Formulaire d'inscription</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                Prénom
                </label>
                <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formRegister.firstName}
                onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                Nom
                </label>
                <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formRegister.lastName}
                onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                Adresse email
                </label>
                <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formRegister.email}
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
                value={formRegister.password}
                onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                Confirmation de mot de passe
                </label>
                <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formRegister.confirmPassword}
                onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                Numéro de téléphone
                </label>
                <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formRegister.phoneNumber}
                onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Soumettre
            </button>
        </form>
    </div>
  );
};

export default Register;