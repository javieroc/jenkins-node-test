var request = require("supertest");
var app = require("../index.js");

describe("GET /", function() {
  it("respond with Hola mundo 2", function(done) {
    //navigate to root and check the the response is "hello world"
    request(app)
      .get("/")
      .expect("hHola mundo 2", done);
  });
});
