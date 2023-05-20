import React, { useReducer, useState, useEffect } from 'react';
import './Form.css';
import newRequest from '../../utils/newRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Form = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('standard');
    const [errors, setErrors] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!name.trim()) {
            validationErrors.name = 'Name is required';
        }

        if (!address.trim()) {
            validationErrors.address = 'Address is required';
        }

        if (!phone.trim()) {
            validationErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(phone)) {
            validationErrors.phone = 'Invalid phone number';
        }

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, proceed with submission
            console.log('Form submitted successfully!');
            // Add your logic to process the form data here
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="form-container">
            <h2>Delivery Details</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="deliveryOption">Delivery Option</label>
                    <select
                        id="deliveryOption"
                        value={deliveryOption}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                    >
                        <option value="standard">Standard Delivery</option>
                        <option value="express">Express Delivery</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;