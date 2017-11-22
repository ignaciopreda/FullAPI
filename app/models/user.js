var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//los esqumas definen la estructura de los documentos, conversiones de propiedades, metodos de instancias, etc.
var UserSchema = new Schema({
  username: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, required: true },
});

module.exports = mongoose.model('User', UserSchema);
