const connectionPool = require('../database/database.js');
const authenticateJWT = require('../helpers/jwtAuthHelper.js');
const express = require('express');
const app = express();
var router = express.Router();
const COMPANY_ROLE = 'company';

router.route('/companies/dashboard').get(authenticateJWT, async (req, res) => {
    const {role} = req.user;
    if (role !== MEMBER_ROLE) {
        return res.sendStatus(403);
    } else {
        //TODO implement
        res.sendStatus(200);
    }
});

module.exports = router;