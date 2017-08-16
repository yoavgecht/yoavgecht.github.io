var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(function(req, res, next){
    if(req.headers['x-forwarded-proto'] == 'http'){
        next();
    } else{
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function(){
    console.log('Express server is up on port ' + PORT);
});