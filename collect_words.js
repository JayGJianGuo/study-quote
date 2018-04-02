var fs = require('fs');

var jsonfile = require('jsonfile');
//引入fs & jsonfils

var writeFilePath = './all_words_info.json';

var errorPathString = './error_files_data.json';

var readFilePath = '../words-from-the-heart/words/';
//定义路径

fs.readdir(readFilePath, function(err, files){
  if(err){
    console.log("读取文件夹失败");
    return;
  }
  //第一个bug，需要更改对应的字段，将markdown变为json
  var jsonFiles = [];
  for (var i = 0; i < files.length; i++) {
    if (files[i].includes('.json')) {
      jsonFiles.push(files[i]);
    }
  }

  var jsonList = [];
  var errorFiles = [];
  for (var i = 0; i < jsonFiles.length; i++) {
    try {
      var content = jsonfile.readFileSync(readFilePath + jsonFiles[i]);
      jsonList.push(jsonFiles[i]);
    } catch (err) {
      errorFiles.push(jsonFiles[i]);
    }
  }

  jsonfile.writeFileSync(writeFilePath, jsonList, {spaces: 2, EOL: '\r\n'});

  jsonfile.writeFileSync(errorPathString, errorFiles, {spaces: 2, EOL: '\r\n'});
});
