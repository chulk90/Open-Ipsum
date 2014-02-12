var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

var User = require('./UserModel');



module.exports = function(passport){
	var TWITTER_CONSUMER_KEY ='dqVee1OBCsIAehykbAXw';
	var TWITTER_CONSUMER_SECRET = 'APqVCeiPCNg4DlBW5nCGDRWwSG4usjPyH7rS4oT80';


	passport.serializeUser(function(user, done) {
	  done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user){
			done(err, user)
		});
	});


	passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
   	
   		User.findOne({_id: profile.id}, function(err, user){
   			// if error stop
   			if (err){ return done(err); }

   			//if user exists, login
   			if(user){
   				return done(null, user)
   			} 
   			// no user, create one
   			else{
          User.create({
            _id: profile.id,
            username: profile.username,
            displayName: profile.displayName,
            dateJoined: new Date(),
            created_at: profile._json.created_at,
            location: profile._json.location, 
            followers_count: profile._json.followers_count,
            photo: profile._json.profile_image_url
          }, function(err, user){
            if (err) {console.log(err); }
            done(null, user);
          })
   				
   				
   			}

   		})   
   
      return done(null, profile);
    });

  }));



}// end exports