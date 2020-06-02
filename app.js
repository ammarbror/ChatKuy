const express = require('express');
const db = require('mysql');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = db.createConnection({
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
    connection.query(
        'SELECT * FROM messages',
        (error, results) => {
            res.render('chat.ejs', {messages: results});
        }
    )    
    
});

app.post('/login', (req, res) => {
    connection.query(
        'INSERT INTO users (name) VALUES (?)',
        [req.body.inputName],
        (error, results) => {
            res.redirect('/chat')
        }
    )
    console.log(req.body.inputName);
    
});

app.listen(3000);