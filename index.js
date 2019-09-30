var mus = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var inst = ["guitar", "bass", "guitar", "drums"];
function theBeatlesPlay(mus, inst) {
  var array = {};
  for (var i = 0; i < mus.length; i++) {
    array.push(mus[i] + ' plays ' + inst[i]);
  }
  return array;
}
