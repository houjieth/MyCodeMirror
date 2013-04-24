
/*
 * Get file source for editing
 *
 */

exports.readSource = function(req, res){
  var filetools = require('../lib/filetools');
  var filename = req.params.filename;
  var content = filetools.readFile(filename);
  res.render('source', { source: content });
};

exports.writeSource = function(req, res){
  var filetools = require('../lib/filetools');
  var filename = req.params.filename;
  var content = req.body.fileContent;
  console.log(filename + ":\n" + content);
  filetools.writeFile(filename, content);
  res.end("finished");
};
