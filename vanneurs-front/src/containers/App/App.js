import { AuthProvider, RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAnnouncement from "../../pages/CreateAnnouncement";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Profil from "../../pages/Profil";
import refreshApi from "../../services/refreshApi";
import NavBar from "../../components/NavBar/Navbar";
import "./App.css";
import Logout from "../../pages/Logout";
import { NotFound } from "../../pages/NotFound";
import Announcements from "../Announcements/Announcements";
import HouseDetails from "../../components/HouseDetails/HouseDetails";

function App() {
  fetch("http://localhost:8080/house")
    .then((resp) => resp.json())
    .then((resp) => console.log(resp));
  return (
    <div>
      <AuthProvider
        authType="localstorage"
        authName="_auth"
        refresh={refreshApi}
      >
        <BrowserRouter>
          <NavBar />
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
              path="/announcements/:id"
              element={
                <RequireAuth loginPath="/login">
                  <HouseDetails/>
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
