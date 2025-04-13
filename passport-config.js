<<<<<<< HEAD
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt")


function initialize (passport, getUserByEmail, getUserById){
  const authenticateUser = async(email, password, done ) => {
     const user = getUserByEmail(email)
     if (user == null){
      return done(null, false, {message: "No user found with that email"})
     }
     try {
      if(await bcrypt.compare(password, user.password)){
          return done(null, user)
      } else{
          return done (null, false, {message: "Password Incorrect"})
      }
  } catch (e) {
      console.log(e);
      return done(e)

}
  }
  passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
  return done(null, getUserById(id));
})
}
=======
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt")


function initialize (passport, getUserByEmail, getUserById){
  const authenticateUser = async(email, password, done ) => {
     const user = getUserByEmail(email)
     if (user == null){
      return done(null, false, {message: "No user found with that email"})
     }
     try {
      if(await bcrypt.compare(password, user.password)){
          return done(null, user)
      } else{
          return done (null, false, {message: "Password Incorrect"})
      }
  } catch (e) {
      console.log(e);
      return done(e)

}
  }
  passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
  return done(null, getUserById(id));
})
}
>>>>>>> 7078e2e34829275df9d1ace15497ceb73de4552f
module.exports = initialize;