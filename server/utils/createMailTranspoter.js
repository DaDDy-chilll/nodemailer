const nodemailer = require("nodemailer");

const createMailTranspoter = () => {
  console.log(process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host:" smtp.gmail.com",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: "safezone0095@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });
  return transporter;
};

module.exports = { createMailTranspoter };
