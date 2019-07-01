/* Importar módulos */
var express = require('express'),
    bodyParser = require ('body-parser'),
    mongoDb = require ('mongodb').MongoClient,
    objectID = require ('mongodb').ObjectID;

var app = express();

/* Configurar body-parser */
app.use(bodyParser.urlencoded({ extended : true }));  
app.use(bodyParser.json());

/* Conexão com banco de dados */
var dbName = 'instagram';
var mongoURL = 'mongodb://localhost:27017/' + dbName;

var connMongoDb = function(data){
    mongoDb.connect(mongoURL, {useNewUrlParser:true}, function(err, client){
        var db = client.db(dbName);
        query(db, data);
        client.close();
    });
}

function query(db, data) {
    var collection = db.collection(data.collection);
    switch (data.operacao) {
      case 'atualizar':
            console.log(objectID(data.set));
        collection.updateOne(objectID(data.dados.id), data.set);
        
        break;
      case 'inserir':
        collection.insertOne(data.dados, data.callback);
        break;
      case 'pesquisar':
        collection.find().toArray(data.callback);
        break;
    case 'pesquisar-um':
        collection.find(objectID(data.dados.id)).toArray(data.callback);
        break;
      case 'remover':
        data.where._id = objectID(data.where._id);
        collection.remove(data.where, data.callback);
        break;
    }
  }

/* Parametrizar porta de escuta */
var port = 3000;
app.listen(port);
console.log('Servidor HTTP está escutando na porta ' + port);


/* Incluir rotas através do express */
app.get('/', function(req, res){
    res.send({msg:'Olá'});
});

//Salvar novo
app.post('/api', function (req, res){
    var data = req.body;
    var dados = {
        operacao: 'inserir',
        dados: data,
        collection: 'postagens',
        callback: function(err, records){
            if(err){
                res.json({'status' : 'erro'});
            }else{
                res.json({'status' : 'inclusão realizada'});
            }
        }
    }
    connMongoDb(dados);
});

// ler todos
app.get('/api', function (req, res){
    var dados = {
        operacao: 'pesquisar',
        collection: 'postagens',
        callback: function(err, records){
            if(err){
                res.json({'status' : 'erro'});
            }else{
                res.json(records);
            }
        }
    }
    connMongoDb(dados);
});

// ler um por ID
app.get('/api/:id', function (req, res){
     var data = req.params
  
    var dados = {
        operacao: 'pesquisar-um',
         dados: data,
        collection: 'postagens',
        callback: function(err, records){
            if(err){
                res.json({'status' : 'erro'});
            }else{
                res.json(records);
            }
        }
    }
    connMongoDb(dados);
});

// Atualizar
app.put('/api/:id', function(req, res){
    var data = req.params

    var dados = {
        operacao: 'atualizar',
        dados: data,
        collection: 'postagens',
        callback: function(err, records){
            if(err){
                res.json({'status' : 'erro'})
            }else{
                res.json(records);
            }
        }
    }
    console.log(dados);
    connMongoDb(dados);
});