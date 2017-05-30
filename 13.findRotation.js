// I want to learn some big words so people think I'm smart.
// I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.
// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:
// words = [ 'ptolemaic',
// 'retrograde',
// 'supplant',
// 'undulate',
// 'xenoepist',
// 'asymptote', # <-- rotates here! 'babka',
// 'banoffee', 'engender', 'karpatka', 'othellolagkage', ]
// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.
// Gotchas
// We can get O(lg n) time.

function findRotation(array, start, end) {
  start = start || 0;
  end = end || array.length - 1;
  var midpoint = Math.floor((end - start) / 2) + start;

  if (array[midpoint] > array[midpoint + 1]) {
    return midpoint + 1;
  }

  //index is in first half
  if (array[start] > array[midpoint]) {
    return findRotation(array, start, midpoint);
  }

  //index is in second half
  if (array[midpoint] > array[end]) {
    return findRotation(array, midpoint + 1, end);
  }
}


module.exports = findRotation;