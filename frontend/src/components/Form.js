import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://backend-15ume7gwi-dheeerendra-singhs-projects.vercel.app/submit', formData)
            .then((response) => {
                setSubmissionMessage('Form submitted successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                setSubmissionMessage('Error submitting form. Please try again.');
                console.error('There was an error!', error);
            });
    };

    return (
        <div className="form-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
        </div>
    );
};

export default Form;
