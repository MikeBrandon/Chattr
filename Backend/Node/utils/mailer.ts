var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: process.env.MAILER_SERVICE,
  auth: {
    user: process.env.MAILER,
    pass: process.env.MAILER_PASS,
  },
});

export const sendMail = (to: string, subject: string, text: string) => {
  var mailOptions = {
    from: process.env.MAILER,
    to,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
