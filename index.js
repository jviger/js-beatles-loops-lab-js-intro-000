// add solution here
function theBeatlesPlay(musicians,instruments){
  
  var empty = [];
  
  for(let i = 0; i < musicians.length; i++){
    empty.push(musicians[i] +' plays '+ instruments[i]);
  }
  return empty;
  
}

function johnLennonFacts(array){
  
  for(let i = 0; i < array.length; i++){
    
  array[i] = array[i] + '!!!';
    
  }
  return array;
  
}