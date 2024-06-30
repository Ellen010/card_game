require('./models/connection');
const Play = require('./models/plays');

function playUno(cards, lastPlay) {
	let lastCard = lastPlay;
	const gameLength = cards.length;

	for (let i = 0; i < gameLength; i++) {
		const cardsToPlay = [];

		for (let i = 0; i < cards.length; i++) {
			if (cards[i].color === lastCard.color || cards[i].number === lastCard.number) {
				cardsToPlay.push(cards[i]);
			}
		}

		lastCard = cardsToPlay[0];
		const index = cards.indexOf(lastCard);
		if (index != null) {
			cards.splice(index, 1);
		}

		if (lastCard) {
			const newPlay = new Play({
				color: lastCard.color,
				number: lastCard.number,
			});
			newPlay.save();
		}
	}
}

const cardsExample = [
	{ color: 'green', number: 6 },
	{ color: 'red', number: 6 },
	{ color: 'red', number: 9 },
	{ color: 'green', number: 9 },
	{ color: 'yellow', number: 9 },
];
const lastPlayExample = { color: 'blue', number: 6 };

playUno(cardsExample, lastPlayExample);

module.exports = playUno;
