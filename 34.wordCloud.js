function wordCloud(sentence) {
  var words = sentence.split(' ');
  var frequencies = {};

  words.forEach(function(word) {
    word = cleanWord(word);
    if (!frequencies[word]) {
      frequencies[word] = 0;
    }
    frequencies[word]++;
  });

  return frequencies;
}

function cleanWord(word) {
  word = word.toLowerCase();
  return word.replace(/[^a-z]/g, '');
}

module.exports = wordCloud;