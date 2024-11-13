const express = require('express');
const app = express();


app.use(express.json());


const tweets = [
	{
		id: 1,
		text: "Teste my tweet",
		user: 1,
		likes: 43,
		posted_at: new Date()
	}
]

app.get('/', (req, res) => {
	res.send(tweets);
})

app.listen(9000, () => {
	console.log('> DevLog API Running at http://localhost:9000');
})