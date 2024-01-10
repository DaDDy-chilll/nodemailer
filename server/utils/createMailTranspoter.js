const nodemailer = require('nodemailer')

const createMailTranspoter = () => {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:"safezone0095@gmail.com",
            pass:process.env.EMAIL_PASS,
        }
    });
    return transporter;
}

module.exports = {createMailTranspoter}