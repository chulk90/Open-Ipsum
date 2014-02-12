module.exports = function(app, Generator){

app.get('/', function(req, res){
	Generator.find({}, function(err, docs){
		if (err){
			res.render('home', {title: 'Open Ipsum - Create and Share Ipsum Generators'})
		} else{
			res.render('home', {title: 'Open Ipsum - Create and Share Ipsum Generators', generators: docs});
		}
	})	
})

app.get('/create', function(req, res){
	res.render('create', {title: 'Create an Ipsum Generator'});
})

app.get('/ipsums/:_id/edit', function(req, res){
	
})

app.get('/about', function(req, res){
	res.render('about', {title: 'About Open Ipsum'});
})

app.get('/login', function(req, res){
	res.render('login', {title: "Sign up with Twitter"});
})

app.get('/developers', function(req, res){
	res.render('developers', {title: 'Open Ipsum API'})
})













} // end exportsr