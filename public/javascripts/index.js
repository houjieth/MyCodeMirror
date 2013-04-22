var editSession;
var editor;

$(document).ready(function() {
  $('.fileLink').each(function(i, elem) {
    $(elem).click(function() {
      $('.buffer').load(escape($(elem).attr('url')), 
        function(responseText, textStatus, XMLHttpRequest) {
          editor = ace.edit("editor");
          editSession = editor.getSession();

          editor.setValue($('.buffer').html());
          editor.setTheme("ace/theme/monokai");
          editor.setFontSize(15);
            
          editSession.setUseWrapMode(true);
        });
    });
  });
});

function toggleFileList() {
  if($('.fileList').style.display != 'none')
    $('.fileList').style.display='none';
  else
    $('.fileList').style.display='block';
}
