const User = require('../models/userModel');

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single user by ID
exports.getUserById = async (req, res) => {
    try {
        const userDoc = await User.findById(req.params.id);
        if (!userDoc) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(userDoc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new user
exports.addUser = async (req, res) => {
    try {
        const userData = req.body;
        if (!userData.name || typeof userData.name !== 'string') {
            return res.status(400).json({ message: 'Name is required and must be a string.' });
        }
        if (userData.age === undefined || isNaN(Number(userData.age))) {
            return res.status(400).json({ message: 'Age is required and must be a number.' });
        }
        if (userData.salary === undefined || isNaN(Number(userData.salary))) {
            return res.status(400).json({ message: 'Salary is required and must be a number.' });
        }
        const userInstance = new User({
            name: userData.name,
            age: Number(userData.age),
            salary: Number(userData.salary)
        });
        const savedUser = await userInstance.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message, error });
    }
};


// Update employee
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Delete user
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}; 