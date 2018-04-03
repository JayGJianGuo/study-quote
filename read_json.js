var jsonFile = require('jsonfile');

var file = './all_words_info.json';
jsonFile.readFile(file, function(err, obj){
  if (err) {
    console.log(err);
  } else {
    console.dir(obj);
  }
});
