var chakram = require('chakram'),
    expect = chakram.expect;

describe("[feature name] Chakram", function() {
  it("[TC name] should provide HTTP specific assertions", function () {
      var response = chakram.get("http://httpbin.org/get");
      return expect(response).to.have.status(200);
    });
});

describe("page not found", function() {
  it("should return 404", function() {
      var response = chakram.get("http://httpbin.org/iriw943jfs");
      return expect(response).to.have.status(404);
      //return chakram.wait();
  })
});

describe("[feature name] Chakrams", function() {
  it("[TC name] should provide a simple async testing framework", function () {
      var response = chakram.get("http://httpbin.org/get");
      return expect(response).to.have.status(200);
      return expect(response).not.to.have.header('non-existing-header');
      //return chakram.wait();
    });
});
