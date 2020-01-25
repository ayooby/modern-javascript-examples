// const chai.expect = require('chai').chai.expect;
import answers from './arrays.js';

describe("arrays", function() {
  let a;

  beforeEach(function() {
    a = [1, 2, 3, 4];
  });

  it("you should be able to determine the location of an item in an array", function() {
    chai.expect(answers.indexOf(a, 3)).to.eql(2);
    chai.expect(answers.indexOf(a, 5)).to.eql(-1);
  });

  it("you should be able to add the values of an array", function() {
    chai.expect(answers.sum(a)).to.eql(10);
    chai.expect(answers.sum([])).to.eql(0);
  });

  it("you should be able to remove a value from an array", function() {
    a.push(2); // Make sure the value appears more than one time
    const result = answers.remove(a, 2);
    chai.expect(result).to.be.a("array");
    chai.expect(result).to.have.length(3);
    chai.expect(result.join(" ")).to.eql("1 3 4");
  });

  it("you should be able to remove a value from an array, returning the original array", function() {
    a.splice(1, 0, 2);
    a.push(2);
    a.push(2);

    const result = answers.removeWithoutCopy(a, 2);

    chai.expect(result).to.be.a("array");
    chai.expect(result).to.have.length(3);
    chai.expect(result.join(" ")).to.eql("1 3 4");

    // make sure that you return the same array instance
    chai.expect(result).equal(a);
  });

  it("you should be able to add an item to the end of an array", function() {
    const result = answers.append(a, 10);

    chai.expect(result).to.be.a("array");
    chai.expect(result).to.have.length(5);
    chai.expect(result[result.length - 1]).to.eql(10);
  });

  it("you should be able to remove the last item of an array", function() {
    const result = answers.truncate(a);

    chai.expect(result).to.be.a("array");
    chai.expect(result).to.have.length(3);
    chai.expect(result.join(" ")).to.eql("1 2 3");
  });

  it("you should be able to add an item to the beginning of an array", function() {
    const result = answers.prepend(a, 10);

    chai.expect(result).to.be.a("array");
    chai.expect(result).to.have.length(5);
    chai.expect(result[0]).to.eql(10);
  });

  it("you should be able to remove the first item of an array", function() {
    const result = answers.curtail(a);

    chai.expect(result).to.be.a("array");
    chai.expect(result).to.have.length(3);
    chai.expect(result.join(" ")).to.eql("2 3 4");
  });

  it("you should be able to join together two arrays", function() {
    const c = ["a", "b", "c", 1];
    const result = answers.concat(a, c);

    chai.expect(result).to.be.a("array");
    chai.expect(result).to.have.length(8);
    chai.expect(result.join(" ")).to.eql("1 2 3 4 a b c 1");
  });

  it("you should be able to add an item anywhere in an array", function() {
    const result = answers.insert(a, "z", 2);

    chai.expect(result).to.be.a("array");
    chai.expect(result).to.have.length(5);
    chai.expect(result.join(" ")).to.eql("1 2 z 3 4");
  });

  it("you should be able to count the occurences of an item in an array", function() {
    const result = answers.count([1, 2, 4, 4, 3, 4, 3], 4);

    chai.expect(result).to.eql(3);
  });

  it("you should be able to find duplicates in an array", function() {
    const result = answers.duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);

    chai.expect(result).to.be.a("array");
    chai.expect(result).to.have.length(3);
    chai.expect(result.sort().join(" ")).to.eql("1 3 4");
  });

  it("you should be able to square each number in an array", function() {
    const result = answers.square(a);

    chai.expect(result).to.be.a("array");
    chai.expect(result).to.have.length(4);
    chai.expect(result.join(" ")).to.eql("1 4 9 16");
  });

  it("you should be able to find all occurrences of an item in an array", function() {
    const result = answers.findAllOccurrences("abcdefabc".split(""), "a");

    chai.expect(result).to.be.a("array");
    chai.expect(result.sort().join(" ")).to.eql("0 6");
  });
});
