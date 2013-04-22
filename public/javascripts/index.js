var editSession;
var editor;

  /*
  if($('.fileList').css('display') != 'none')
    $('.fileList').css({display: 'none'});
  else
    $('.fileList').css({display: 'block'});
  */

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

  $('#toggleFileList').click(function() {
    $('.fileList').toggle();
    /*
    if($('.fileList').css("display") != "none")
      $('.fileList').css({"display": "none"});
    else
      $('.fileList').css({"display": "block"});
    */
  });
});

