/* Importar módulos */
const express = require('express')
const bodyParser = require('body-parser')
const controllers = require('./controllers')

const app = express()

/* Configurar body-parser */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

controllers.init(app)

const port = 3000
app.listen(port, function () {
  console.log(`Servidor HTTP está escutando em 'http://localhost:${port}'.`)
})

// /* query onde as funções irão passar */
// function query(db, data) {
//     var collection = db.collection(data.collection);
//     switch (data.operacao) {
//         case 'atualizar':
//             collection.updateOne(data.where, data.set, data.multi, data.callback);
//         break;
//         case 'inserir':
//             collection.insertOne(data.dados, data.callback);
//         break;
//         case 'pesquisar':
//             collection.find(data.dados).toArray(data.callback);
//         break;
//         case 'remover':
//             data.where._id = ObjectID(data.where._id);
//             collection.remove(data.where, data.callback);
//         break;
//     }
//   }

// /* Parametrizar porta de escuta */


// //Salvar novo
// app.post('/api', function (req, res){
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
// app.get('/api', function (req, res){
//     var dados = {
//         operacao: 'pesquisar',
//         collection: 'postagens',
//         callback: function(err, records){
//             console.log({err, records});
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
// app.get('/api/:id', function (req, res){
//     var dados = {
//         operacao: 'pesquisar',
//         dados: ObjectID(req.params.id),
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
// app.put('/api/:id', function(req, res){
//     var dados = {
//         operacao: 'atualizar',
//         where:{ _id: ObjectID(req.params.id)},
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
//     console.log(dados);
//     connMongoDb(dados);
// });

// app.delete('/api/:id', function(req, res){
//     var dados = {
//         operacao: 'remover',
//         where: {_id: req.params.id},
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