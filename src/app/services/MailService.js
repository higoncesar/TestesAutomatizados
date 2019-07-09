const nodemailer = require("nodemailer");
const mailconfig = require("../../config/mail");

class MailService {
  send(message) {
    const trasporter = nodemailer.createTransport(mailconfig);
    return trasporter.sendMail(message);
  }
}

module.exports = new MailService();
