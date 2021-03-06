// We'd rather sacrifice user experience than confusing the user about the file content status
// So we don't use async read and write

exports.readFile = function(filename) {
  fs = require('fs');
  var content = fs.readFileSync(process.env.IPREVIEW_SOURCE_HOME + filename, 'utf8');
  return content;
};
exports.writeFile = function(filename, data) {
  fs = require('fs');
  var content = fs.writeFileSync(process.env.IPREVIEW_SOURCE_HOME + filename, data, 
          {encoding: 'utf8'});
  console.log(filename + " written to disk!");
};

exports.readFileList = function() {
  fs = require('fs');
  var list = fs.readdirSync(process.env.IPREVIEW_SOURCE_HOME);
  return list;
};
