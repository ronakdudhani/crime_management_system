import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PoliceOfficerList.css';

const PoliceOfficerList = () => {
    const [officers, setOfficers] = useState([]);

    useEffect(() => {
        axios.get('/api/police-officers')
            .then(response => setOfficers(response.data))
            .catch(error => console.error('Error fetching police officers:', error));
    }, []);

    return (
        <div className="officer-list-container">
            <h2>Police Officers</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {officers.map(officer => (
                        <tr key={officer.id}>
                            <td>{officer.id}</td>
                            <td>{officer.name}</td>
                            <td>{officer.rank}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PoliceOfficerList;
