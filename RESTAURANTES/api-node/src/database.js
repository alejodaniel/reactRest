const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'geolocalizacion',
});

module.exports = db