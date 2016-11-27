//supertest lib is used for to test expressjs routes and REST API call
const request = require('supertest');
//Assertion library
const expect = require('expect');

var app = require('./server').app;


describe("SERVER",()=>{
    describe("#GET /",()=>{
        it('should test get URL or path',(done)=>{
            request(app)
            .get('/')
            .expect(404)
            .expect((res)=>{
                //expect lib assertion 
                expect(res.body).toInclude({
                    error:"Page not found",
                    name:"VITTAL"
                })

                //console.log(JSON.stringify(res,undefined,2));
            })
            .end(done);
        });
    })
    

    describe("#GET /users",()=>{
        it('shold return my array object',(done)=>{

            request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).toInclude({name:'Vittal',age:28});
            })
            .end(done);
        })
    });

});

