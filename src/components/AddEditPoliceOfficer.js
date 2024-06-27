import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddEditPoliceOfficer.css';

const AddEditPoliceOfficer = ({ officer }) => {
    const [name, setName] = useState(officer ? officer.name : '');
    const [rank, setRank] = useState(officer ? officer.rank : '');
    const [station, setStation] = useState(officer ? officer.station : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const officerData = { name, rank, station };

        if (officer) {
            axios.put(`/api/police-officers/${officer.id}`, officerData)
                .then(response => console.log('Police officer updated:', response.data))
                .catch(error => console.error('Error updating police officer:', error));
        } else {
            axios.post('/api/police-officers', officerData)
                .then(response => console.log('Police officer created:', response.data))
                .catch(error => console.error('Error creating police officer:', error));
        }
    };

    return (
        <div className="add-edit-officer-container">
            <h2>{officer ? 'Edit Police Officer' : 'Add Police Officer'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rank:</label>
                    <input
                        type="text"
                        value={rank}
                        onChange={(e) => setRank(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Station:</label>
                    <input
                        type="text"
                        value={station}
                        onChange={(e) => setStation(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{officer ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default AddEditPoliceOfficer;
