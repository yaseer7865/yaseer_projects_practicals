import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            name,
            age: Number(age),
            salary: Number(salary)
        };
        console.log('Submitting user:', userData);
        if (!name || !age || !salary) {
            alert('Please fill in all fields.');
            return;
        }
        try {
            await axios.post('http://localhost:5000/api/user', userData);
            navigate('/');
        } catch (error) {
            console.error('Error adding user:', error);
            if (error.response && error.response.data && error.response.data.message) {
                alert('Failed to add user: ' + error.response.data.message);
            } else {
                alert('Failed to add user. Please check your input and try again.');
            }
        }
    };

    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
            <Container className="mt-4 d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: 800 }}>
                <h2 className="mb-4">Add New User</h2>
                <Form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Salary (INR)</Form.Label>
                        <Form.Control
                            type="number"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add User
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddUser;