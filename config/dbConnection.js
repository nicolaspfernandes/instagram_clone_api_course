var mongoDb = require ('mongodb').MongoClient;

var dbName = 'instagram';
var mongoURL = 'mongodb://localhost:27017/' + dbName;

var connMongoDb = function(app, data){
    var dbQuery =  new app.models.queryDAO(connection);

    mongoDb.connect(mongoURL, {useNewUrlParser:true}, function(err, client){
        var db = client.db(dbName);
        dbQuery.query(db, data);
        client.close();
    });
}

module.exports = function(){
    console.log('Database ON');
    return connMongoDb; 
}
