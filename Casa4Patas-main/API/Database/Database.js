const mysql = require('mysql2');
class Database {
  static connect() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'onganimal',
    });

    connection.connect();
    return connection;
  }
}
module.exports = Database;
