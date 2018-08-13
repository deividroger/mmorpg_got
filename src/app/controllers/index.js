module.exports.index = function(application,req,resp){

    resp.render('index',{validacao: {}});
};

module.exports.autenticar = function(application,req,resp){

    var dadosForm = req.body;

    req.assert('usuario','Usuário não pode ser vazio').notEmpty();

    req.assert('senha','senha não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        resp.render('index',{validacao: erros});

        return;
    }

    var connection =  application.config.dbConnection;
    
    var usuarioDAO = new application.app.models.UsuariosDAO( connection);

    usuarioDAO.autenticar(dadosForm,req,resp);


};