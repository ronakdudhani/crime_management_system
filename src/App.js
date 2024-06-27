import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import PoliceStationDashboard from './pages/PoliceStationDashboard';
import PoliceOfficerDashboard from './pages/PoliceOfficerDashboard';
import './assets/css/styles.css';
import PoliceOfficerList from './components/PoliceOfficerList';
import AddEditPoliceOfficer from './components/AddEditPoliceOfficer';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/police-station-dashboard" element={<PoliceStationDashboard />} />
                <Route path="/police-officer-dashboard" element={<PoliceOfficerDashboard />} />
                <Route path="/police-officers" element={<PoliceOfficerList />} />
                <Route path="/add-police-officer" element={<AddEditPoliceOfficer />} />

                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
