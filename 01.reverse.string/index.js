// reverseString('nora')= ('aron')
// reverseString('cat')=('tac') 
// reverseString('for')=('rof')
// reverseString('Hilsa')=('aslih')

function reverseString(strings) {

  // return strings.split('').reverse().join('');
  // let reversed = ''; 

  // for(char of strings) {
  //   reversed = char + reversed;
  // }
  // return reversed;
  return strings.split('').reduce((rev, char) => char + rev, '')

}



module.exports = reverseString;