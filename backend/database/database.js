const pgCon = require('pg');

let config = {
    host: 'postgres',
    port: 5432,
    user: 'admin',
    password: 'passwd',
    database: 'whistleblower-app'
}

let connectionPool = new pgCon.Pool(config);

module.exports = connectionPool;
