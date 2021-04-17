var express = require("express");
var path = require('path');
var app = express();
const PORT = 3000;

app.use("/assets", express.static('./assets/'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))

});

app.listen(PORT);
console.log('Express server started');
console.log(`http://localhost:${PORT}`);