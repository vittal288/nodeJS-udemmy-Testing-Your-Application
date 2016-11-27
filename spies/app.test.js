const expect = require('expect');
const rewire = require('rewire');


var app = rewire('./app');

describe("APP SPIES",()=>{

    var db ={
        saveUser:expect.createSpy()
    }

    //mocking db object using rewire
    app.__set__("db",db);

    
    //to test the spy from expect lib
    it("should call the spy correclty",()=>{
        var spy = expect.createSpy();
        spy('Vittal',28);
        expect(spy).toHaveBeenCalledWith('Vittal',28);
    });

    it("should call the saveUser with user object",()=>{
        var email ="vittal288@example.com";
        var password ="123abc";
        //calling the actual method: handleSignUp()
        app.handleSignup(email,password);
        //spying the db.saveUser() method
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});



