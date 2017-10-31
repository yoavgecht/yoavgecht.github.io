var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//Connect to the database
mongoose.connect('mongodb://undefined:undefined07@ds145315.mlab.com:45315/todo')

//Create a scheme - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);


// var data = [{item: 'get milk'},{item: 'walk dog'},{item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    //get data from mongodb and pass it to the view
    Todo.find({}, function(err, data){
      if(err) throw err;
      res.render('todo', {todos:data});
    });
  });

  app.post('/todo', urlencodedParser, function(req, res){
    //get data form the view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err, data){
      res.json(data);
    })
  });

  app.delete('/todo/:item', function(req, res){
    //Delete the requested item from mongodb
    console.log(req.params.item);
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if(err) throw err;
      res.json(data)
    });
  });
};
