module.exports = (req, res, next) => {
    let { username, password} = req.body;
    console.log("🤖 ~ req.session:", req.session)


    
    console.log("Login check parameters: ",req.body);
    //Check the parameters passed by browser.
    if (username == "" || password == "") {
      var error_message = "All parameters are required";
      res.render("login", { error_message });
      return;
    }
    console.log('middleware validation complete');
    next();
  };
  
  