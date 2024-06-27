import React from 'react';
import { Link } from 'react-router-dom';
import './PoliceStationDashboard.css';

const PoliceStationDashboard = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2>Police Station Dashboard</h2>
            </header>
            <nav className="dashboard-nav">
                <ul>
                    <li><Link to="/police-officers">View Police Officers</Link></li>
                    <li><Link to="/add-police-officer">Create Police Officer</Link></li>
                    <li><Link to="/firs">View FIRs</Link></li>
                    <li><Link to="/assign-investigation">Assign Investigation</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default PoliceStationDashboard;
