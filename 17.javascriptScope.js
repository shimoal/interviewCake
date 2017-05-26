// If we execute this Javascript, what will the browser's console show?
// var text = 'outside'; function logIt(){
// console.log(text);
// var text = 'inside'; };
// logIt();


var text = 'outside';

function logIt() {
  return text;
  var text = 'inside'
}

module.exports = logIt;
