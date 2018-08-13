module.exports = function(application){
	application.get('/', function(req, resp){

		application.app.controllers.index.index(application,req,resp);
	});

	application.post('/autenticar', function(req, resp){

		 application.app.controllers.index.autenticar(application,req,resp);
	});
}