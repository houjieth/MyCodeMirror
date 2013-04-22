
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
