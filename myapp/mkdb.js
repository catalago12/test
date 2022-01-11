var MongoClient = require('mongodb').MongoClient;

//Crear una base de datos llamada 'basedatos':

var url = 'mongodb://localhost:27017/basedatos';
MongoClient.connect(url, {useUnifiedTopology:true}, function(err, db){
    if(err) throw err;
    console.log('Database creada Ok!');
    db.close();
});