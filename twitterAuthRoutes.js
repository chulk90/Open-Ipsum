module.exports = function(app, passport){



	// view profile
	app.get('/profile', isAuth,  function(req, res){
		res.json(req.user);
	});

	// logout
	app.get('/logout', function(req, res){
		req.logout();
		res.json('Logout');
	});

	//twitter auth
	app.get('/auth/twitter', passport.authenticate('twitter'));

	//twitter callback
	app.get('/auth/twitter/callback', 
	  passport.authenticate('twitter', {
	  	successRedirect: '/profile',
	  	failureRedirect: '/'
	}));



}// end exports

function isAuth(req, res, next){
	if(req.isAuthenticated())
		return next();
	res.redirect('/');
}
