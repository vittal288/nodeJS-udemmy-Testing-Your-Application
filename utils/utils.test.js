const utils = require('./utils');
const expect = require('expect');

describe("UTILS",()=>{
    describe("#ADD",()=>{
        it("should add two numbers",()=>{

            var res = utils.add(33,11);
            
            expect(res).toBe(44).toBeA('number');
            // if(res !== 44){
            //     throw new Error(`Expected 44, but got ${res}`);
            // }
        });

        it('should test async add two numbers',(done)=>{

            utils.asyncAdd(3,4,(sum)=>{
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    })
    
    describe("#SQUARE",()=>{
        it("should square a number",()=>{

            var res = utils.square(3);
            expect(res).toBe(9).toBeA('number');
            // if(res !==9){
            //     throw new Error(`Expected 9, but got ${res}`);
            // }
        });

        

        it('should test async of square a number',(done)=>{
            utils.asyncSqaure(3,(res)=>{
                expect(res).toBe(9).toBeA('number');
                done();
            });
        }); 
    });
});


describe("PLAYGROUND",()=>{
    it("should expect some value " ,()=>{
        //expect(12).toNotBe(122);
        //expect({name:"vittal"}).toEqual({name:"vittal"})
        //for array and object
        //expect([2,3,4]).toInclude(2);
        //expect([1,2,3]).toExclude(4);

        expect({
            name:"Vittal",
            age:28,
            address:"Bangalore"
        }).toInclude({
            age:28
        })
    });

    it('should set first name and last name ',()=>{
        var user ={location:"Bangalore",age:28}
        var res = utils.setName(user,'Vittal Kamkar');
        //one way of asserting 
        expect(res).toInclude({firstName:"Vittal",lastName:'Kamkar'});
        //OR
        //console.log(res);
        //another way of asserting 
        expect(res).toBe(user);
        //user object it self also updated because object ares passed to function by reference in JS
    });

});




