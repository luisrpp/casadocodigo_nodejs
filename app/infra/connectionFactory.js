var mysql = require('mysql');

var createDBConnection = function() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'casadocodigo_nodejs'
    });
}

// Ação necessária para que o express-load não
// execute a função na inicialização.
module.exports = function() {
    return createDBConnection;
}
