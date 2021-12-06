import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CheckAuth from "./Components/CheckAuth/CheckAuth.component";
import LoginPage from "./pages/LoginPage";
import MiPerfilPage from "./pages/MiPerfilPage";
import MapPage from "./pages/MapPage";
import NewAdminPage from "./pages/NewAdminPage";
import NewResident from "./pages/NewResidentPage";
import AuthProvider from "./Providers/Auth.provider";

function mustLogIn(Component) {
  return (
    <CheckAuth mustBeAuth redirectTo="/login">
      <Component />
    </CheckAuth>
  );
}

function mustBeAnon(Component) {
  return (
    <CheckAuth mustBeAuth={false} redirectTo="/">
      <Component />
    </CheckAuth>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/new-resident">New Resident</Link>
          <Link to="/new-admin">New Admin</Link>
          <Link to="/map">Map Placeholder</Link>
          <Link to="/login">Login</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={mustLogIn(MiPerfilPage)} />
          <Route path="new-admin" element={mustLogIn(NewAdminPage)} />
          <Route path="new-resident" element={mustLogIn(NewResident)} />
          <Route path="map" element={mustLogIn(MapPage)} />
          <Route path="login" element={mustBeAnon(LoginPage)} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
