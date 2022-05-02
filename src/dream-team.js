const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam(/* members */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
function createDreamTeam( members ) {

  const res0 = [];
  if (!Array.isArray(members)) {    
    return false;
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        const wordWithoutSpace = members[i].trim().toUpperCase();
        res0.push(wordWithoutSpace[0]);       
      }
    }
  }
  
  const res = res0.sort().join('');            
  return res;    
}
  
module.exports = {
  createDreamTeam
};
