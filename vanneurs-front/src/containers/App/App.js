import { AuthProvider, RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Announcements from "../../pages/Announcements";
import CreateAnnouncement from "../../pages/CreateAnnouncement";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Profil from "../../pages/Profil";
import refreshApi from "../../services/refreshApi";
import NavBar from "../NavBar/Navbar";
import "./App.css";
import Logout from "../../pages/Logout";
import { NotFound } from "../../pages/NotFound";

function App() {
  // fetch("http://localhost:8080/address")
  //   .then((resp) => resp.json())
  //   .then((resp) => console.log(resp));
  return (
    <div>
      <AuthProvider
        authType="localstorage"
        authName="_auth"
        refresh={refreshApi}
      >
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
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
