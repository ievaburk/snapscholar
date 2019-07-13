var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
var path = require('path');

app.use(express.static('public'));
app.get('/',function(req, res) {
	res.sendFile(path.join(__dirname, "/public", "/story1cv.html"));
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));