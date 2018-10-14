var request = require("supertest");
var server = require("../index.js");

describe("GET /", function() {
  after(() => {
    server.close();
  });

  it("respond with Hola mundo 22", function(done) {
    //navigate to root and check the the response is "hello world"
    request(server)
      .get("/")
      .expect("Hola mundo 22", done);
  });
});
