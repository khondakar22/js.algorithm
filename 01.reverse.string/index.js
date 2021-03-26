// -- Directions

// 

function reverse(str) {

  // Needs some javascript knowledge

  // First solution
  // return str.split('').reverse().join('')
  // // Second Solution
  // let reversed = '';
    
  // for (let char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed;

  // Third Solution
  return str.split('').reduce((rev, char) => char + rev , '' ) 

}

reverse('asdf1');




module.exports = reverse;