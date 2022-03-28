const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/angular-app'));

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/angular-app/index.html'));
    //res.sendFile('index.html', {root: 'dist/angular-app/'});
});

app.listen(process.env.PORT || 8080);