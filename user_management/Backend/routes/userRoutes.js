const express = require('express');
const router = express.Router();
const { 
    getEmployees, 
    addEmployee, 
    updateEmployee, 
    deleteEmployee 
} = require('../controllers/employeeController');

// Get all employees
router.get('/', getEmployees);

// Add a new employee
router.post('/', addEmployee);

// Update an existing employee by ID
router.put('/:id', updateEmployee);

// Delete an employee by ID
router.delete('/:id', deleteEmployee);

module.exports = router;