/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i += 3) {
    if (i + 2 === preferences[i] && i + 3 === preferences[i + 1] && i + 1  === preferences[i+2]) {
      count++;
    }
  }
  return count;
};
