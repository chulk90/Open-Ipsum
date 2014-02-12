var mongoose = require('mongoose');

// **
// ** USER Schema
// **
var userSchema = mongoose.Schema({
	_id: String, //profile.id
	username: String,
	displayName: String,
	dateJoined: Date,
	created_at: String,
	location: String, 
	followers_count: Number,
	photo: String
},{ versionKey: false});
module.exports = mongoose.model('User', userSchema);