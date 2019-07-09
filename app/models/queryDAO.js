objectID = require ('mongodb').ObjectID;

function QueryDAO(connection){
    this._connection = connection;
}

/* query onde as funções irão passar */
QueryDAO.prototype.query = function (db, data) {
    var collection = db.collection(data.collection);
    switch (data.operacao) {
        case 'atualizar':
            collection.updateOne(data.where, data.set, data.multi, data.callback);
        break;
        case 'inserir':
            collection.insertOne(data.dados, data.callback);
        break;
        case 'pesquisar':
            collection.find(data.dados).toArray(data.callback);
        break;
        case 'remover':
            data.where._id = objectID(data.where._id);
            collection.remove(data.where, data.callback);
        break;
    }
  }

module.exports = function(){
    return QueryDAO;
}