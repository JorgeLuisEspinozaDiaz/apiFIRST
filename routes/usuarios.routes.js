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
      error: "uno o mas campos vacios",
    });
  }

  const newUser = {
    id: uuid.v4(),
    email: email,
    name: name,
  };

  const user = await User.create(newUser);
  res.json({
    user,
  });
});

module.exports = router;
