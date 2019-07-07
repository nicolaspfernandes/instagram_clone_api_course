module.exports.users = function(app,req,res){
    var connection = app.config.dbConnection();
    var usersModel = new app.app.models.queryDAO(connection);

    usersModel.getUsers(function(error, result){
        res.send({msg:'Olá'});
    });

}

    // //Salvar novo
    // userModel.post('/api', function (req, res){
    //     var dados = {
    //         operacao: 'inserir',
    //         dados: req.body,
    //         collection: 'postagens',
    //         callback: function(err, records){
    //             if(err){
    //                 res.json({'status' : 'erro'});
    //             }else{
    //                 res.json({'status' : 'inclusão realizada'});
    //             }
    //         }
    //     }
    //     connMongoDb(dados);
    // });

    // // ler todos
    // userModel.get('/api', function (req, res){
    //     var dados = {
    //         operacao: 'pesquisar',
    //         collection: 'postagens',
    //         callback: function(err, records){
    //             if(err){
    //                 res.json({'status' : 'erro'});
    //             }else{
    //                 res.json(records);
    //             }
    //         }
    //     }
    //     connMongoDb(dados);
    // });

    // // ler um por ID
    // userModel.get('/api/:id', function (req, res){
    //     var dados = {
    //         operacao: 'pesquisar',
    //         dados: objectID(req.params.id),
    //         collection: 'postagens',
    //         callback: function(err, records){
    //             if(err){
    //                 res.json({'status' : 'erro'});
    //             }else{
    //                 res.json(records);
    //             }
    //         }
    //     }
    //     connMongoDb(dados);
    // });

    // // Atualizar
    // userModel.put('/api/:id', function(req, res){
    //     var dados = {
    //         operacao: 'atualizar',
    //         where:{ _id: objectID(req.params.id)},
    //         set: { $set: {titulo: req.body.titulo} },
    //         multi: {},
    //         collection: 'postagens',
    //         callback: function(err, records){
    //             if(err){
    //                 res.json({'status' : 'erro'})
    //             }else{
    //                 res.json(records);
    //             }
    //         }
    //     }
    //     connMongoDb(dados);
    // });

    // userModel.delete('/api/:id', function(req, res){
    //     var dados = {
    //         operacao: 'remover',
    //         where: {_id: req.params.id},
    //         collection: 'postagens',
    //         callback: function(err, records){
    //             if(err){
    //                 res.json({'status' : 'erro'});
    //             }else{
    //             res.json(records);
    //             }
    //         }
    //     }
    //     connMongoDb(dados);
    // });
