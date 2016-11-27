const db = require("./db");

module.exports.handleSignup =(email,password)=>{
    //cheack if email exist
    //save user info to database
    //send the welcome email 

    db.saveUser({email,password});
};