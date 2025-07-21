const express = require("express");
const router = express.Router();
const CitasMedicas = require("../models/CitaMedica");

router.post("/", async (req, res) => {
  try {
    const citas = new CitasMedicas(req.body);
    await citas.save();
    res.status(201).json(citas);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const citas = await CitasMedicas.find();
    res.json(citas);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const citas = await CitasMedicas.findById(req.params.id);
    if (!citas)
      return res.status(404).json({ message: "No se encontro la cita" });
    res.json(citas);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const citas = await CitasMedicas.findByIdAndDelete(req.params.id);
    if (!citas)
      return res.status(400).json({ message: "No se encontro la cita" });
    res.json(citas);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
