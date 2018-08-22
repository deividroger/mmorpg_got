module.exports = function(application){
	application.get('/jogo', function(req, resp){
		
		application.app.controllers.jogo.jogo(application,req,resp);
		
		
	});

	application.get('/sair', function(req, resp){
		
		application.app.controllers.jogo.sair(application,req,resp);
				
	});

	application.get('/suditos', function(req, resp){
		
		application.app.controllers.jogo.suditos(application,req,resp);
				
	});

	application.get('/pergaminhos', function(req, resp){
		
		application.app.controllers.jogo.pergaminhos(application,req,resp);
				
	});

	application.post('/ordernar_acao_sudito', function(req, resp){
		
		application.app.controllers.jogo.ordernar_acao_sudito(application,req,resp);
				
	});

	application.get('/revogar_acao', function(req, resp){
		
		application.app.controllers.jogo.revogar_acao(application,req,resp);
				
	});

	
}

