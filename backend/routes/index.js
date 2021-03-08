const express = require('express');
const jwt = require('jsonwebtoken');
const connectionPool = require('../database/database.js');
const jwtAuthHelper = require('../helpers/jwtAuthHelper.js');
const authenticateJWT = require('../helpers/jwtAuthHelper.js');
const app = express();
var router = express.Router();
require('dotenv').config();
const accessSecret = process.env.SECRET_ACCESS_TOKEN;

// fake users
const users = [
    {
        username: 'adsaccount',
        password: 'password123ads',
        role: 'company'
    }, {
        username: 'memberaccount',
        password: 'password123member',
        role: 'support'
    }
];

router.route('/login').post(async (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);

    // replace this stuff with db pulled data
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});



module.exports = router;