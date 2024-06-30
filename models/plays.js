const mongoose = require('mongoose');

const playSchema = mongoose.Schema({
	color: String,
	number: Number,
});

const Play = mongoose.model('plays', playSchema);

module.exports = Play;
