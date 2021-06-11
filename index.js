const express = require('express');
const nodemailer = require('nodemailer')
const fs = require('fs')

const app = express();
app.use(express.json)

const sendMail = async () => {

  const mailTemplate = fs.readFileSync('./template.html', 'utf8')

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: 'audra11@ethereal.email',
      pass: 'XShUdjVNg9agctZMhg'
    }
  })

  const info = await transporter.sendMail({
    to: "eduardo.c.romanini@gmail.com",
    subject: "Teste",
    html: mailTemplate
  })

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

sendMail()

app.listen(3000, () => console.log('Server working!'))