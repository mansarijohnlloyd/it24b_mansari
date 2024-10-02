const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory

// Endpoint 1: Student Information
app.get('/student', (req, res) => {
    const student = {
        name: 'John Lloyd Mansari',
        age: 19,
        occupation: 'Student',
        major: 'Programming'
    };
    console.log(student); // Log student info to the server console
    res.json(student); // Send student info as a JSON response
});

// Endpoint 2: Course List
app.get('/courses', (req, res) => {
    const courses = ['Mathematics', 'Programming', 'Data Structures', 'Algorithms', 'Web Development'];
    res.json(courses); // Send courses list as a JSON response
});

// Endpoint 3: Get Current Time
app.get('/time', (req, res) => {
    const currentTime = new Date().toLocaleString();
    res.json({ time: currentTime }); // Send current time as a JSON response
});

// Endpoint 4: Get a Greeting Message
app.get('/greet', (req, res) => {
    const greeting = "Hello! Welcome to the Five Server!";
    res.json({ message: greeting }); // Send greeting message as a JSON response
});

// Endpoint 5: Get Server Status
app.get('/status', (req, res) => {
    res.json({ status: 'Server is running smoothly!' }); // Send server status as a JSON response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});