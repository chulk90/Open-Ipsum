var mongoose = require('mongoose');
var slug = require('slug');

// **
// ** Generator Schema
// **
var generatorSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: 'You have to set a name'
	},
	words:{
		type: Array,
		validate: [validateWords, "You need at least 20 words."]
	},
	dateCreated: Date,
	createdby: {
		id: String,
		username: String,
		displayName: String
	},
	_id:{
		type: String, 
		unique: true
	}
},{ versionKey: false});
module.exports = mongoose.model('Generator', generatorSchema);
function validateWords(val){
	if( val.length >=20){
		return true
	} else{
		return false
	}
}