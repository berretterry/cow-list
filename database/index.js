const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'cowlist'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

var listCows = function(callback) {
    let queryString = 'SELECT * FROM cows';
    connection.query(queryString, function(err, results, fields) {
        callback(err, results);
    })
}

var addCow = function(data, callback) {
  let queryString = 'INSERT INTO cows (cowname, disc) VALUES (?, ?)'
  debugger;
  connection.query(queryString, [data.cowname, data.disc], function(err, results, fields) {
    debugger;
    if (err) {
      callback(err, 'failed')
    }
    callback(null, 'Cow Added')
  })
}



// Don't forget to export your functions!
module.exports.listCows = listCows;
module.exports.addCow = addCow;
