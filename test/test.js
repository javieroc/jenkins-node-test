var request = require("supertest");
var server = require("../index.js");

describe("GET /", function() {
  after(function(done) {
    server.close();
    done();
  });

  it("respond with Hola mundo 10", function(done) {
    //navigate to root and check the the response is "hello world"
    request(server)
      .get("/")
      .expect("Hola mundo 10", done);
  });
});
