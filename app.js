const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
mongoose.connect('mongodb://localhost:27017/game-website-db', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const gameSchema = new mongoose.Schema({
    title: String,
    genre: String,
});

const Game = mongoose.model('Game', gameSchema);

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/api/games', async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/games', async (req, res) => {
    const game = new Game({
        title: req.body.title,
        genre: req.body.genre,
    });

    try {
        const newGame = await game.save();
        res.status(201).json(newGame);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

