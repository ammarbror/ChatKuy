const express = require('express');
const db = require('mysql');

const app = express();
app.use(express.static('public'));

const connection =db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12VS0012VS00',
    database: 'chatkuy'
});

connection.connect((err) => {
    if (err) {
        console.log('errorr connection: ' + err.stack);
        return;
    }
    console.log('success');
    
});

app.get('/', (req, res) => {
    res.render('login.ejs');
});

app.get('/chat', (req, res) => {
    res.render('chat.ejs');
});

app.listen(3000);