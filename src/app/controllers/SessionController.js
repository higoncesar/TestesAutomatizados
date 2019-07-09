const { User } = require("../models");
const Mail = require("../services/MailService");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).send({ message: "User not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).send({ message: "Incorrect Password" });
    }

    await Mail.send({
      from: "Higon Cesar <higoncesar@gmail.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Novo acesso a conta",
      text: "E ae beleza? registramos um novo acesso a sua conta"
    });

    return res.json({
      token: await user.generateToken()
    });
  }
}

module.exports = new SessionController();
