var app = require('./config/server');

/* Parametrizar porta de escuta */
var port = 3000;
app.listen(port);
console.log('Servidor HTTP está escutando na porta ' + port);
