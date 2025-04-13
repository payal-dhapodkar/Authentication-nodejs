
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
 

// if (process.env,NODE_ENV !== "production"){
//   require("dotenv").config()
// }

const env = process.env.NODE_ENV || 3000 ; // fallback so it won’t crash
console.log('Current environment:', env);

// Importing all Libraies that we installed using npm
//  const express = require("express");
import express from 'express';
 const app = express();
//  const bcrypt = require("bcrypt") //import bcrypt package
import bcrypt from 'bcrypt';

//  const passport = require("passport")
//  const initializePassport = require("./passport-config")
//  const flash = require("express-flash")
//  const session = require("express-session")
//  const methodOverride = require('method-override');
import passport from 'passport';
import initializePassport from './passport-config.js';
import flash from 'express-flash';
import session from 'express-session';
import methodOverride from 'method-override';

 const PORT = 3000;

 initializePassport(
    passport,
    email => user.find(user => user.email === email),
    id => user.find(user => user.id === id)
    )
  
    import dotenv from 'dotenv';
dotenv.config();

//chat
app.set('view engine', 'ejs');

 const user = []
 app.use(express.urlencoded({extended: false}))
 app.use(flash())
 app.use(session({
   secret: process.env.SESSION_SECRET || 'fallbackSecret',
   resave: false, // We wont resave the session variable if nothing is changed
   saveUninitialized: false
 }))
 app.use(passport.initialize()) 
 app.use(passport.session())
 app.use(methodOverride("_method"))

//  function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect('/');
//   }
//   next();
// }

// // Configuring the register post functionality
app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
}))

 app.post("/register",checkNotAuthenticated, async(req, res) => {
  try{
          const hashedPassword = await bcrypt.hash(req.body.password, 10)
          user.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
          })
          console.log(user);
          res.redirect("/login")
  } catch(e) {
            console.log(e);
             res.redirect("/register")
  }
 })
//Routes



 app.get('/', checkAuthenticated, (req, res) => {
  res.render("index.ejs" , {name: req.user.name})
 })

 app.get('/login', checkNotAuthenticated , (req, res) => {
  res.render("login.ejs" )
 })

 app.get('/register', checkNotAuthenticated , (req, res) => {
  res.render("register.ejs")
 })
 // End Routes

 app.delete("/logout", (req, res) => {
    req.logout(req.user, err => {
        if (err) return next(err)
        res.redirect("/")
    })
  })

 function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
  }
  function checkNotAuthenticated(req, res, next){
      if(req.isAuthenticated()){
          return res.redirect("/")
      }
      next()
    }
  

 app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//  app.listen(3000)


// // Importing all Libraies that we installed using npm
// const express = require("express")
// const app = express()
// const bcrypt = require("bcrypt") // Importing bcrypt package
// const passport = require("passport")
// const initializePassport = require("./passport-config")
// const flash = require("express-flash")
// const session = require("express-session")
// const methodOverride = require("method-override")

// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
//   )



// const users = []

// app.use(express.urlencoded({extended: false}))
// app.use(flash())
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false, // We wont resave the session variable if nothing is changed
//   saveUninitialized: false
// }))
// app.use(passport.initialize()) 
// app.use(passport.session())
// app.use(methodOverride("_method"))

// // Configuring the register post functionality
// app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/login",
//   failureFlash: true
// }))

// // Configuring the register post functionality
// app.post("/register", checkNotAuthenticated, async (req, res) => {

//   try {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10)
//       users.push({
//           id: Date.now().toString(), 
//           name: req.body.name,
//           email: req.body.email,
//           password: hashedPassword,
//       })
//       console.log(users); // Display newly registered in the console
//       res.redirect("/login")
      
//   } catch (e) {
//       console.log(e);
//       res.redirect("/register")
//   }
// })

// // Routes
// app.get('/', checkAuthenticated, (req, res) => {
//   res.render("index.ejs", {name: req.user.name})
// })

// app.get('/login', checkNotAuthenticated, (req, res) => {
//   res.render("login.ejs")
// })

// app.get('/register', checkNotAuthenticated, (req, res) => {
//   res.render("register.ejs")
// })
// // End Routes

// // app.delete('/logout', (req, res) => {
// //     req.logOut()
// //     res.redirect('/login')
// //   })

// app.delete("/logout", (req, res) => {
//   req.logout(req.user, err => {
//       if (err) return next(err)
//       res.redirect("/")
//   })
// })

// function checkAuthenticated(req, res, next){
//   if(req.isAuthenticated()){
//       return next()
//   }
//   res.redirect("/login")
// }

// function checkNotAuthenticated(req, res, next){
//   if(req.isAuthenticated()){
//       return res.redirect("/")
//   }
//   next()
// }


// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
 

// if (process.env,NODE_ENV !== "production"){
//   require("dotenv").config()
// }

// const env = process.env.NODE_ENV || 3000 ; // fallback so it won’t crash
// console.log('Current environment:', env);

// Importing all Libraies that we installed using npm
//  const express = require("express");
// import express from 'express';
//  const app = express();
//  const bcrypt = require("bcrypt") //import bcrypt package
// import bcrypt from 'bcrypt';

//  const passport = require("passport")
//  const initializePassport = require("./passport-config")
//  const flash = require("express-flash")
//  const session = require("express-session")
//  const methodOverride = require('method-override');
// import passport from 'passport';
// import initializePassport from './passport-config.js';
// import flash from 'express-flash';
// import session from 'express-session';
// import methodOverride from 'method-override';

//  const PORT = 3000;

//  initializePassport(
//     passport,
//     email => user.find(user => user.email === email),
//     id => user.find(user => user.id === id)
//     )
  
//     import dotenv from 'dotenv';
// dotenv.config();

// //chat
// app.set('view engine', 'ejs');

//  const user = []
//  app.use(express.urlencoded({extended: false}))
//  app.use(flash())
//  app.use(session({
//    secret: process.env.SESSION_SECRET || 'fallbackSecret',
//    resave: false, // We wont resave the session variable if nothing is changed
//    saveUninitialized: false
//  }))
//  app.use(passport.initialize()) 
//  app.use(passport.session())
//  app.use(methodOverride("_method"))

//  function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect('/');
//   }
//   next();
// }

// // Configuring the register post functionality
// app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/login",
//   failureFlash: true
// }))

//  app.post("/register",checkNotAuthenticated, async(req, res) => {
//   try{
//           const hashedPassword = await bcrypt.hash(req.body.password, 10)
//           user.push({
//             id: Date.now().toString(),
//             name: req.body.name,
//             email: req.body.email,
//             password: hashedPassword
//           })
//           console.log(user);
//           res.redirect("/login")
//   } catch(e) {
//             console.log(e);
//              res.redirect("/register")
//   }
//  })
// //Routes



//  app.get('/', checkAuthenticated, (req, res) => {
//   res.render("index.ejs" , {name: req.user.name})
//  })

//  app.get('/login', checkNotAuthenticated , (req, res) => {
//   res.render("login.ejs" )
//  })

//  app.get('/register', checkNotAuthenticated , (req, res) => {
//   res.render("register.ejs")
//  })
//  // End Routes

//  app.delete("/logout", (req, res) => {
//     req.logout(req.user, err => {
//         if (err) return next(err)
//         res.redirect("/")
//     })
//   })

//  function checkAuthenticated(req, res, next){
//     if(req.isAuthenticated()){
//         return next()
//     }
//     res.redirect("/login")
//   }
//   function checkNotAuthenticated(req, res, next){
//       if(req.isAuthenticated()){
//           return res.redirect("/")
//       }
//       next()
//     }
  

//  app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// //  app.listen(3000)


// // Importing all Libraies that we installed using npm
// const express = require("express")
// const app = express()
// const bcrypt = require("bcrypt") // Importing bcrypt package
// const passport = require("passport")
// const initializePassport = require("./passport-config")
// const flash = require("express-flash")
// const session = require("express-session")
// const methodOverride = require("method-override")

// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
//   )



// const users = []

// app.use(express.urlencoded({extended: false}))
// app.use(flash())
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false, // We wont resave the session variable if nothing is changed
//   saveUninitialized: false
// }))
// app.use(passport.initialize()) 
// app.use(passport.session())
// app.use(methodOverride("_method"))

// // Configuring the register post functionality
// app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/login",
//   failureFlash: true
// }))

// // Configuring the register post functionality
// app.post("/register", checkNotAuthenticated, async (req, res) => {

//   try {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10)
//       users.push({
//           id: Date.now().toString(), 
//           name: req.body.name,
//           email: req.body.email,
//           password: hashedPassword,
//       })
//       console.log(users); // Display newly registered in the console
//       res.redirect("/login")
      
//   } catch (e) {
//       console.log(e);
//       res.redirect("/register")
//   }
// })

// // Routes
// app.get('/', checkAuthenticated, (req, res) => {
//   res.render("index.ejs", {name: req.user.name})
// })

// app.get('/login', checkNotAuthenticated, (req, res) => {
//   res.render("login.ejs")
// })

// app.get('/register', checkNotAuthenticated, (req, res) => {
//   res.render("register.ejs")
// })
// // End Routes

// // app.delete('/logout', (req, res) => {
// //     req.logOut()
// //     res.redirect('/login')
// //   })

// app.delete("/logout", (req, res) => {
//   req.logout(req.user, err => {
//       if (err) return next(err)
//       res.redirect("/")
//   })
// })

// function checkAuthenticated(req, res, next){
//   if(req.isAuthenticated()){
//       return next()
//   }
//   res.redirect("/login")
// }

// function checkNotAuthenticated(req, res, next){
//   if(req.isAuthenticated()){
//       return res.redirect("/")
//   }
//   next()
// }

// app.listen(3000)