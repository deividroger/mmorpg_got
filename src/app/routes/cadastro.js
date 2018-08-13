module.exports = function(application){
	
	application.get('/cadastro',function(req,resp){

		application.app.controllers.cadastro.cadastro(application,req,resp);

	});

	application.post('/cadastrar',function(req,resp){

		application.app.controllers.cadastro.cadastrar(application,req,resp);

	});
	
};