var request = require("supertest");
var app = require("../index.js");

describe("GET /", function() {
  it("respond with Hola mundo 7", function(done) {
    //navigate to root and check the the response is "hello world"
    request(app)
      .get("/")
      .expect("Hola mundo 7", done);
  });
});
