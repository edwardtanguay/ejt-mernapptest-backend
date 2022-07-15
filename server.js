import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3667;

app.get('/', (req, res) => {
	res.send('<h1>Mern-App-Test</h1>');
});

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});