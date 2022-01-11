const mongose = require('mongoose');
const Schema = mongoose.Schema;

const LibroSchema = new Schema({
    Autor: String,
    Titulo : String,
    Genero: String,
    Editorial : String,
    Item : {type: Number},
    Info : String
});

module.exports=mongose.model('libors', LibroSchema);