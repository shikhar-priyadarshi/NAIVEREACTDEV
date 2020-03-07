const passport = require ('passport');
const LocalStrategy = require ('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require ('../models/Users');
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromUrlQueryParameter();
opts.secretOrKey = "Express";

//Local strategy for register part.
passport.use('register', new LocalStrategy({
    usernameField : 'email'
   }, async(email, password, done) =>{
      try{
        let userFound = await User.findOne({email});
        if(userFound){
            done(null,userFound,'Email is already in use');
        }
        else{
            let createUser = await User.create({ email, password });
            done(null, createUser, 'User registered successfully');
        }
      }
      catch(error){
         done( error, false, error.message);
      }
}));

//Local strategy for Login part.
passport.use('login', new LocalStrategy(
    {
        usernameField : 'email'
    },
   async ( email, password, done) => {
        try{
        let userFound = await User.findOne({email, password});        
          if(userFound){
            return done(null, userFound);
           }
        return done( null, false, 'Invalid email or password');
        }
        catch(err){
            return done(err, false, err.message);
        }
}));

//passport-jwt strategy for verifying token.
passport.use('jwt',new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));