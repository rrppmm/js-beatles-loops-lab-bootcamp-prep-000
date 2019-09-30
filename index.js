function theBeatlesPlay(mus, inst) {
  var array = {};
  for (var i = 0; i < mus.length; i++) {
    array.push(mus[i] + ' plays ' + inst[i]);
  }
  return array;
}