var expect  = require("chai").expect;
var request = require("request");

describe("Index page", function() {
    var url = "http://localhost:3000"
    
    it("should return status 200",function(done) {
        request(url, function(error,response,body) {
            expect(response.statusCode).to.equal(200);
            done();
        });  
    });

    it("should return an array of users",function(done) {
        request(url + "/users", function(error,response,body) {
            expect(JSON.parse(response.body)).to.be.an('array');
            done();
        });  
    });
});