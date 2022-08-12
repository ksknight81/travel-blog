const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost', 
        user: 'root',
        password: 'Che$terC@t123', 
        database: 'travel_blog'
    },
    console.log('Connected to the travel blog database')
);

')
db.query(`SELECT * FROM review`, (err, rows) => {
    console.log(rows);
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});