const User = require("../models/User");

module.exports = {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      // validação básica
      if (!name || !email || !password) {
        return res.status(400).json({
          error: "Name, email and password are required",
        });
      }

      // verificar se o usuário já existe
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({
          error: "User already exists",
        });
      }

      const user = await User.create({
        name,
        email,
        password,
      });

      return res.status(201).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  },
};
