// src/services/userService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/user'; // Replace with your API URL

export const registerUser = async (userData) => {
    console.log("userData >>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(userData);
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserProfile = async() => {
     try {
        const response = await axios.get(`${API_URL}/profile`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUserProfile = async() => {
    try {
        const response = await axios.put(`${API_URL}/profile`);
        return response.data;
    } catch (error) {
        throw error;
    }
};