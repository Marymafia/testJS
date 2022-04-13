function removeChar(str){
  for(let i = 0; i < str.length; i++){
    return str.slice(1,-1)
  }
};
module.exports = { removeChar}
