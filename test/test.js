var request = require("supertest");
var app = require("../index.js");

describe("GET /", function() {
  it("respond with Hola mundo 4", function(done) {
    //navigate to root and check the the response is "hello world"
    request(app)
      .get("/")
      .expect("hHola mundo 4", done);
  });
});
