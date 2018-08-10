// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  
  for (var i = 1; i < musicians.length; i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}