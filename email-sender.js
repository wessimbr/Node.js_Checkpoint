var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Wessim@gmail.com',
    pass: 'password'
  }
});

// Email options
var mailOptions = {
  from: 'Wessim@gmail.com',
  to: 'myfriend@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'How are you today ?'






























  
};

// Send email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
