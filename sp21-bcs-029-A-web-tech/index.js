require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 4000 || process.env.PORT;
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('Connected to MongoDB')});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
    })
);

app.use((req, res, next) => {
    // console.log(req.session);
    next();
    // delete req.session;
});

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('Hello World!')
    }
);
app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
    }
);

// Path: package.json

