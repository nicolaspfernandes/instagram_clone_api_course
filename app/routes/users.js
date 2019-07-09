module.exports = function(app){
    app.get('/', function(req, res){
        app.app.controllers.users.users(app,req,res)
    });
}