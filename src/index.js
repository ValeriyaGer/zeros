module.exports = function getZerosCount(number) {
  var j = 5, count = 0; 
  var max = maxDegree(number);
             
  for (var ind = 0 ; ind < max; ind++){
    count = count + div(number, j);
    j = j*5;
  };
  return count;
  
  function maxDegree(a) {
    var count = 0, i = 1;
    while (i <= a) {
      i = i*5;
      count++;
    };
    return count;
  };
    
  function div(a, b) {
    return ( a - a % b)/b
  };
    
}
