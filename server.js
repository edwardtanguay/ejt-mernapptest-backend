import express from 'express';
import dotenv from 'dotenv';
import { Book } from './models/Book.js';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URL =
    process.env.MONGODB_URL || 'mongodb://localhost/ejt-mernapptest';

mongoose.connect(MONGODB_URL, (err) => {
    if (err) {
        console.log({
            error: 'Cannot connect to MongoDB database.',
            err: `"${err}"`
        });
    }
});

const app = express();
const port = process.env.PORT || 3667;

app.get('/', (req, res) => {
    res.send('<h1>Mern-App-Test</h1>');
});

app.get('/books', async (req, res) => {
	const books = await Book.find();
	res.json(books);
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
