module.exports.jogo = function(application,req,resp){

    if(req.session.autorizado !==true ){
      resp.send('Usuário precisa fazer login');
      return;
    }

    var msg = '';

    if(req.query.msg != ''){
      msg = req.query.msg;
    }
      

    var database = application.config.dbConnection;

    var jogoDAO = new application.app.models.JogoDAO(database);

    jogoDAO.iniciaJogo(resp, req.session.usuario,req.session.casa,msg);

};

module.exports.sair = function(application,req,resp){

  req.session.destroy(function(err){

    resp.render('index',{validacao:{}});

  });
};

module.exports.suditos = function(application,req,resp){

  if(req.session.autorizado !==true ){
    resp.send('Usuário precisa fazer login');
    return;
  }


  resp.render('aldeoes',{validacao:{}});
  
};

module.exports.pergaminhos = function(application,req,resp){

  if(req.session.autorizado !==true ){
    resp.send('Usuário precisa fazer login');
    return;
  }

  var connection = application.config.dbConnection;


  var jogoDAO = new application.app.models.JogoDAO(connection);

  var usuario = req.session.usuario;

  jogoDAO.getAcoes(usuario,resp);

  

};

module.exports.ordernar_acao_sudito = function(application,req,resp){

  var dadosForm = req.body;

  req.assert('acao','Ação deve ser informada').notEmpty();

  req.assert('quantidade','A quantidade deve ser informada').notEmpty();

  var errors = req.validationErrors();

  if(errors){
     resp.redirect('jogo?msg=A');
     return;
  }

  var connection = application.config.dbConnection;

  var jogoDAO = new application.app.models.JogoDAO(connection);

  dadosForm.usuario = req.session.usuario;

  jogoDAO.acao(dadosForm);

  resp.redirect('jogo?msg=B');

};