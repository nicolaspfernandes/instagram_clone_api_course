module.exports = function(app){
    userModel.get('/', function(req, res){
        app.app.controllers.user.user(app,req,res)
    });
}