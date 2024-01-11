const { createMailTranspoter } = require('./createMailTranspoter')

const sendVerificationMail = (user) => {
    const transporter = createMailTranspoter();
    console.log('url',`${process.env.ClIENT_URL}/verify-email?emailToken=${user.emailToken}`);
    const mailOptions = {
        from:"'Mail App' <safezone0095@gmail.com>",
        to:user.email,
        subject: "Verify your Email...",
        html:`<p>Hello 👏 ${user.name}, verify your email by clicking this link...</p>
                <a href="${process.env.ClIENT_URL}/verify-email?emailToken=${user.emailToken}">Verify Your Email</a>`
    }

    transporter.sendMail(mailOptions,(error,info) => {
        if(error){
            console.log(error);
            
        }else{
            console.log('Verification Email sent');
        }
    })
}

module.exports = {sendVerificationMail}