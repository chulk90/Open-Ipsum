module.exports = function(app, Generator){




// *******
// Create
// *******
app.post('/ipsums', function(req, res){

	Generator.create({
		name: req.body.name,
		words: req.body.words,
		dateCreated: new Date(),
		createdBy: 'Jackson',
		_id: slug(req.body.name)
	}, function(err, docs){
		
		if (err){ res.json(err); } 
		else{ res.json(docs); }
	})

});



// *******
// Show one
// *******
app.get('/ipsums/:_id', function(req, res){
	Generator.findOne({_id: req.params._id}, function(err, docs){
		if(err){ res.json(err) }
		else if(docs === null){ res.json('Not found'); }
		else { res.json(docs) }
	})

});




// *******
// Show all 
// *******
app.get('/ipsums', function(req, res){

	Generator.find({}, function(err, docs){
		if(err){ res.json(err) }
		else { res.json(docs) }
	})

});


app.get('/ipsums/:_id/edit', function(req, res){
	Generator.findById(req.params._id, function(err, docs){
		if (err) {res.json(err); }
		else{res.json(docs); }
	})
})

// *******
// Update
// *******
app.put('/ipsums', function(req, res){
	
	Generator.findByIdAndUpdate(req.body._id, {
		name: req.body.name,
		words: req.body.words
	}, function(err, docs){
		if (err){res.json(err);}
		else{res.json(docs);}
	})

});





// *******
// Delete
// *******
app.del('/ipsums', function(req, res){

	Generator.findByIdAndRemove(req.body._id, function(err, docs){
		if (err){ res.json(err);}
		else{res.json(docs+ ' removed');}
	})

});



}// end module exports