// A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.
// They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something.
// It must be love
// Write a function to find the rectangular intersection of two given love rectangles.
// As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.
// They are defined as hash maps↴ like this:


function rectangularLove(rectA, rectB) {
  var overlap = {};
  var noOverlap = {x: 0, y: 0, height: 0, width: 0}

  overlap.x = Math.max(rectA.x, rectB.x);
  overlap.y = Math.max(rectA.y, rectB.y);
  overlap.width = Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - overlap.x;
  overlap.height = Math.min(rectA.y + rectA.height, rectB.y + rectB.height) - overlap.y;


  if (overlap.height <= 0 || overlap.width <= 0) {
    return noOverlap;
  }

  return overlap;


}

module.exports = rectangularLove;