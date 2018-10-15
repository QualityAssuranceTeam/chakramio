var chakram = require('chakram'),
    expect = chakram.expect;

describe("API testing tool", function() {
  it("should provide HTTP specific assertions", function () {
      var response = chakram.get("http://httpbin.org/get");
      return expect(response).to.have.status(200);
    });
});

describe("Chakram", function() {
  it("should provide a simple async testing framework", function () {
    var response = chakram.get("http://httpbin.org/get");
    return expect(response).to.have.status(200);
    expect(response).not.to.have.header('non-existing-header');
    return chakram.wait();
    });
});

describe("HTTP assertions", function () {
  it("should make HTTP assertions easy", function () {
    var response = chakram.get("http://httpbin.org/get?test=chakram");
    return expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).not.to.be.encoded.with.gzip;
    expect(response).to.comprise.of.json({
    args: { test: "chakram" }
    });
    return chakram.wait();
  });
});

describe("BDD + Hooks", function () {
  var thingName;
  before("post dweet", function () {
    thingName = "chakramtest" + Math.floor(Math.random()*2000);
    return chakram.post("https://dweet.io/dweet/for/"+thingName, {
      testing: "your API"
    });
  });

  it("should support getting latest dweet", function () {
    var postedData = chakram.get("https://dweet.io/get/latest/dweet/for/"+thingName);
    return expect(postedData).to.have.json('with[0].content', {
      testing: "your API"
    });
  });

  after("update dweet with result", function () {
    return chakram.post("https://dweet.io/dweet/for/"+thingName, {
      testing: "passed"
    });
  });
});

describe("page not found test", function() {
  it("should return 404", function() {
    var response = chakram.get("http://httpbin.org/iriw943jfs");
    return expect(response).to.have.status(404);
    //return chakram.wait();
  })
});
