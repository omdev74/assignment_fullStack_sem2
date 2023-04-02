const express = require("express");
const expressSession = require('express-session');
const path = require("path");
const ejs = require("ejs");
const dotenv = require("dotenv");



global.loggedIn = null;



// express setup
const app = new express();

app.listen(4000, () => {
  console.log("App listening on port 4000");
});


// controllers

const homeController = require('./controllers/home');
const dashboardController = require("./controllers/dashboard")
const loginPageController = require('./controllers/login');
const userloginLogicController = require("./controllers/userloginLogic")
const gController = require('./controllers/g');
const updateUserController = require("./controllers/updateUser")
const updateUserG2_Controller = require("./controllers/updateUser_g2")

const getUserFromLicenseController = require("./controllers/getUserFromLicense")
const g2Controller = require('./controllers/g2');
const signupPageController = require('./controllers/signup');
const logoutController = require('./controllers/logout')

const createNewUserController = require("./controllers/createNewUser")
const storeUserController = require("./controllers/storeUser")
const appointmentContoller = require("./controllers/appointment")



// middelware setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({
  extended: true
}));
app.use(expressSession({ secret: "omdev" }))
app.use(express.json());

app.use("*", (req, res, next) => {
  //setting global loggedIn value
  loggedIn = req.session.userId;
  next()
});




const redirectIfAuthenticatedMiddleware = require('./middlewares/redirectIfAuthenticatedMiddleware');
const loginValidationMiddleware = require('./middlewares/loginValidationMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
const authorizeOnUserTypeMiddleware = require('./middlewares/authorizeOnUserTypeMiddleware');


// environment file config
dotenv.config();



// MongoDb Setup
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Modules MongoDb
const User = require("./Models/User");


// CRUD ROUTES

// get routes
app.get('/', homeController);
app.get('/g', authMiddleware, authorizeOnUserTypeMiddleware, gController);
app.get('/g2', authMiddleware, authorizeOnUserTypeMiddleware, g2Controller);
app.get('/appointment', authMiddleware, authorizeOnUserTypeMiddleware, appointmentContoller)
app.get("/dashboard", dashboardController);
app.get("/login", redirectIfAuthenticatedMiddleware, loginPageController);
app.get("/signup", redirectIfAuthenticatedMiddleware, signupPageController);
app.get("/license", getUserFromLicenseController)
app.get('/auth/logout', logoutController)

app.get("/database", async (req, res) => {

  const Users = await User.find({});
  console.log(Users);
  res.json(Users)

});

// post routes

app.post("/user/createNewUser", createNewUserController);
app.post("/user/store", storeUserController)
app.post("/user/update", updateUserController)
app.post("/user/update/g2", updateUserG2_Controller)
app.post('/userLogin', loginValidationMiddleware, userloginLogicController);





// 404 route
app.use((req, res) => res.render('notfound'));