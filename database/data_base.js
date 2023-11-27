const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('Northwin.db',(err) => {
    if (err) {
        console.error('Error al abrir la base de datos', err.message);
      } else {
        console.log('Conectado a la base de datos SQLite3');
      }
});

module.exports = db;