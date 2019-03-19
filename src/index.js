/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  preferences.unshift(0);
  var one;
  var two;
  var three;
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    one = preferences[i];
    two = preferences[one];
    three = preferences[two];

    if (( one !== i ) && (one !==0) &&(two !==0) && (three !==0) &&  
        (two !== one) && (two !== i) &&
        (i == three)) {

      count = count++;
    }

  }
  return count / 3;
};

//  console.log(getLoveTrianglesCount());пше 