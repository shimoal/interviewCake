var chai = require('chai');
var expect = chai.expect;
var rectangularLove = require('../6.rectangularLove.js');

describe('6.rectangularLove', function(){
  it('should be a function',function() {
    expect(rectangularLove).to.be.a('function');
  });

  it('should return a rectangle for basic overlap', function() {
    //1
    var rectA = {x: 1, y: 2, width: 10, height:5};
    var rectB = {x: 3, y: 0, width: 2, height: 3};
    var overlap = rectangularLove(rectA, rectB);
    expect(overlap).to.deep.equal({x: 3, y: 2, width: 2, height: 1});
    //2
    var rectA1 = {x: 6, y: 0, width: 4, height: 8};
    var rectB1 = {x: 2, y: 2, width: 6, height: 4};
    var overlap1 = rectangularLove(rectA1, rectB1);
    expect(overlap1).to.deep.equal({x: 6, y: 2, width: 2, height: 4});
  });

  it('should return a rectangle of nothing for not touching', function() {
    var rectA = {x: 1, y: 2, width: 2, height:2};
    var rectB = {x: 6, y: 9, width: 2, height: 3};
    var overlap = rectangularLove(rectA, rectB);
    expect(overlap).to.deep.equal({x: 0, y: 0, width: 0, height: 0});
  });

  it('should return a rectangle of nothing for touching sides', function() {
    var rectA = {x: 0, y: 0, width: 4, height: 5};
    var rectB = {x: 3, y: 5, width: 3, height: 3};
    var overlap = rectangularLove(rectA, rectB);
    expect(overlap).to.deep.equal({x: 0, y: 0, width: 0, height: 0});
  });

  it('should return the smaller rectangle if encapsulated by larger', function() {
    var rectA = {x: 0, y: 0, width: 5, height: 5};
    var rectB = {x: 2, y: 2, width: 1, height: 1};
    var overlap = rectangularLove(rectA, rectB);
    expect(overlap).to.deep.equal({x: 2, y: 2, width: 1, height: 1});
  });
})