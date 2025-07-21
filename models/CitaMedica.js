const mongoose = require("mongoose");

const citaSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  paciente: { type: String, required: true },
  doctor: { type: String, required: true },
  fecha: { type: Date, required: true },
  motivo: { type: String, required: true },
});

module.exports = mongoose.model("Citas", citaSchema);
