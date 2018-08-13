/* importar as configurações do servidor */
var app = require('./config/server');



/* parametrizar a porta de escuta */
app.listen(8002, function(){
	console.log('Servidor online');
})
