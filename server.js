// server.js

const express = require('express');
const cors = require('cors');
const testConnection = require('./testConnection');
const referralRouter = require('./routes/referralRouter');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World! From Gul Muazzam Faize');
});

// Use the referral router
app.use('/', referralRouter);

testConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

