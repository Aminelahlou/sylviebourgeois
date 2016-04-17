var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

/* --- dépendances de contact --- */
//var nodemailer = require('nodemailer');
//var transporter = nodemailer.createTransport();
/* --- fin de dépendances de contact --- */
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public/Read'));


// instruct express to server up static assets
app.use(express.static('public/Read'));

app.get('/', function(request, response) {
  response.render('index')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// app.post('/contact',function(request, response){
// 	var transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: test,
//         pass: test
//     }
// });
	
//   var mailOptions = {
//     from: '',
//     to: '',
//     subject: '',
//     text: 'Vous avez été contacté par ' + request.body.name + ':' + request.body.email + '\n' + request.body.message
// };

// send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);

// });
// });