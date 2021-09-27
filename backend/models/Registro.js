const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let registroSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    entrada: {
      type: String,
    },
    salida: {
      type: String,
    },
  },
  {
    collection: "registro",
  }
);

module.exports = mongoose.model("Registro", registroSchema);
