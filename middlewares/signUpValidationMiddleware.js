module.exports = (req, res, next) => {
    let { 
        username, 
        password, 
        confirm_password,
    } = req.body;
    console.log("Validating signUp",req.body);
    
    if (username == '' || password == '' || confirm_password == '') {
        var error_message = "Empty field detected";
        res.render("signup", { error_message });
        return;
    }
    
    if (password !== confirm_password) {
        var error_message = "Password not the same";
        res.render("signup", { error_message });
        return;
    }
    next();
};
  
  