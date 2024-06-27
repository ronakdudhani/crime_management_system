import React from 'react';
import { Link } from 'react-router-dom';
import './PoliceOfficerDashboard.css';

const PoliceOfficerDashboard = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2>Police Officer Dashboard</h2>
            </header>
            <nav className="dashboard-nav">
                <ul>
                    <li><Link to="/add-fir">Add FIR</Link></li>
                    <li><Link to="/add-criminal">Add Criminal</Link></li>
                    <li><Link to="/add-crime">Add Crime</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default PoliceOfficerDashboard;
