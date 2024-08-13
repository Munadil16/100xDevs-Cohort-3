/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(a, b) {
  const str1 = a.toLowerCase();
  const str2 = b.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < str1.length; i++) {
    const ch = str1[i];

    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const ch = str2[i];

    if (!map.has(ch)) {
      return false;
    }

    map.set(ch, map.get(ch) - 1);
  }

  let mapKeys = map.keys();
  for (let key of mapKeys) {
    if (map.get(key) !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
