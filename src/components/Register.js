import React, { useState } from 'react';
import './Register.css'; // Ensure this import is correct

const Api_URL = "https://d8twdt-5000.csb.app";

const Register = ({ history }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "student"
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const signup = async () => {
        let responseData;
        await fetch(Api_URL + `/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((data) => responseData = data);
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
           
                window.location.replace('/login');
            
        } else {
            alert(responseData.errors);
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <input name="name" value={formData.name} onChange={changeHandler} type="text" placeholder="Your Name" />
            <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
            <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
            <select name='role' value={formData.role} onChange={changeHandler}>
                <option value="student">Student</option>
                <option value="expert">Expert</option>
            </select>
            <button type="button" onClick={signup}>Register</button>
        </div>
    );
};

export default Register;

