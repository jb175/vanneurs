import { AuthProvider, RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";
import CreateAnnouncement from "../../pages/CreateAnnouncement";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Logout from "../../pages/Logout";
import Register from "../../pages/Register";
import { NotFound } from "../../pages/NotFound";
import Profil from "../../pages/Profil";
import Announcements from "../Announcements/Announcements";
import "./App.css";

function App() {
  fetch("http://localhost:8080/house")
    .then((resp) => resp.json())
    .then((resp) => console.log(resp));
  return (
    <div>
      <AuthProvider authType="localstorage" authName="_auth">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/profil"
              element={
                <RequireAuth loginPath="/login">
                  <Profil />
                </RequireAuth>
              }
            />
            <Route
              path="/announcements"
              element={
                <RequireAuth loginPath="/login">
                  <Announcements />
                </RequireAuth>
              }
            />
            <Route
              path="/create-announcement"
              element={
                <RequireAuth loginPath="/login">
                  <CreateAnnouncement />
                </RequireAuth>
              }
            />
            <Route
              path="/logout"
              element={
                <RequireAuth loginPath="/login">
                  <Logout />
                </RequireAuth>
              }
            />
            <Route
              path="*"
              element={
                <RequireAuth loginPath="/login">
                  <NotFound />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
