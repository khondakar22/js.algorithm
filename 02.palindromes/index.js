// function palindrome(str){
//   var reversed = str.split('').reverse().join('');
//   return str === reversed;
// }   

// const palindrome = (str) => {
//   return str === [...str].reverse().join('');
// }
function palindrome(str) {
  return str === str.split('').every((chr, index) => {
    return chr === str[str.length - index - 1]
  } );
}

module.exports = palindrome;