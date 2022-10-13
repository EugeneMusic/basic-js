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


function createDreamTeam(members) {
  let team = [];
  if (Array.isArray(members)) {
    members.map(elem => {
      if (typeof (elem) === "string") {
        team.push(elem.trim().slice(0, 1).toUpperCase())
      }

    })
    if (team.sort().join('') === "" || team === []) {
      return false
    }


    return team.sort().join('')
  }
  else return false
}

module.exports = {
  createDreamTeam
};
