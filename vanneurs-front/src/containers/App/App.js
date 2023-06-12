import { AuthProvider, RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";
import CreateAnnouncement from "../../pages/CreateAnnouncement";
import Login from "../../pages/Login";
import House from "../../pages/House";
import { NotFound } from "../../pages/NotFound";
import Profil from "../../pages/Profil";
import Register from "../../pages/Register";
import Announcements from "../Announcements/Announcements";
import HouseDetails from "../../components/HouseDetails/HouseDetails";
import "./App.css";
import Offers from "../../pages/Offers";
import Exchanges from "../../pages/Exchanges";

function App() {
  return (
    <div>
      <AuthProvider authType="localstorage" authName="_auth">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profil"
              element={
                <RequireAuth loginPath="/login">
                  <Profil />
                </RequireAuth>
              }
            />
            <Route
              path="/my-house"
              element={
                <RequireAuth loginPath="/login">
                  <House />
                </RequireAuth>
              }
            />
            <Route
              path="/"
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
                  <HouseDetails />
                </RequireAuth>
              }
            />
            <Route
              path="/offers/"
              element={
                <RequireAuth loginPath="/login">
                  <Offers />
                </RequireAuth>
              }
            />
            <Route
              path="/exchanges/"
              element={
                <RequireAuth loginPath="/login">
                  <Exchanges />
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
