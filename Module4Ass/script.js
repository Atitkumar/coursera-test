



(function () {

var names = ["Yaman", "Jony", "Jay", "stephen", "Paul", "Frank", "Larry", "Paula", "Laura", "tony"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();



