var filelistClosed = false;
var curFileName = null;
var cm = null;

$(document).ready(function() {
        
  $('.fileLink').each(function(i, elem) {
    $(elem).click(function() {
      if(cm != null) {
        $('#main').children()[1].remove(); // remove the CodeMirror div
      }
      $('#editor').load(escape($(elem).attr('url')), 
        function(responseText, textStatus, XMLHttpRequest) {
          curFileName = $(elem).attr('filename');
          cm = CodeMirror.fromTextArea(document.getElementById("editor"), {
            lineNumbers: true,
            mode: "text/x-csrc",
            keyMap: "vim",
            showCursorWhenSelecting: true,
            lineWrapping: true
          });

          CodeMirror.commands.save = function(){
            var writeUrl = escape($(elem).attr('writeUrl'));
            var content = cm.getDoc().getValue();
            $.post(writeUrl, {fileContent : content});
            alert("POST to: " + writeUrl); 
          };
        });
    });
  });

  $('#togglefilelist').click(function() {
    if(filelistClosed == false) {
      $('.CodeMirror').animate({'left': '-2px'}, 500);
      filelistClosed = true;
    } else {
      $('.CodeMirror').animate({'left': '300px'}, 500);
      filelistClosed = false;
    }
  });
});

