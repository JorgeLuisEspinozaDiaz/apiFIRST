const User = require("../models/usuarios");
const uuid = require("uuid");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const user = await User.findAll();
  res.json(user);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    nombre: "jorge",
  });
});

router.post("/", async (req, res) => {
  const { email, name } = req.body;
  if (!email || !name) {
    return res.status(400).json({
      error: "Uno o más campos vacíos",
    });
  }

  try {
    const user = await User.create({
      name: name,
      email: email,
    });

    res.json({
      user,
    });
  } catch (error) {
    console.error("Error al crear un usuario:", error);
    res.status(500).json({
      error: "Error interno del servidor al crear un usuario",
    });
  }
});

module.exports = router;
