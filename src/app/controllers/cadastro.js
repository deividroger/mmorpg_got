module.exports.cadastro = function(application,req,resp){

    resp.render('cadastro',{validacao:{},dadosForm:{} });
    
};

module.exports.cadastrar = function(application,req,resp){

    var dadosform = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();

    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();

    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    var erros =  req.validationErrors();

    if(erros){
        resp.render('cadastro',{validacao: erros, dadosForm: dadosform});
        return ;
    }

    var database = application.config.dbConnection;
    
    var UsuariosDAO = new application.app.models.UsuariosDAO(database);

    var jogoDAO = new application.app.models.JogoDAO(database);


    UsuariosDAO.inserir(dadosform);
    
    jogoDAO.gerarParametros(dadosform.usuario);

	resp.send('Usuário cadastrado com sucesso!')

};