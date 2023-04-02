const User = require("../Models/User");

module.exports = async (req, res) => {


  console.log("Its called");


  console.log(req.body);

  const { firstname, lastname, License_No, Age, manufacturer, model, year, plate_no, username, password, userType } = req.body;

  console.log(username, password, userType);




  await User.create({
    username, password, userType
  }, (error, user) => { console.log(user,error);  
  
  })
  res.redirect('/login')

}