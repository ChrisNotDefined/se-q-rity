import { HashRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import NewAdminPage from "./pages/NewAdminPage";
import NewResident from "./pages/NewResidentPage";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new-resident">New Resident</Link>
        <Link to="/new-admin">New Admin</Link>
        <Link to="/map">Map Placeholder</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="new-admin" element={<NewAdminPage />} />
        <Route path="new-resident" element={<NewResident />} />
        <Route path="map" element={<MapPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
