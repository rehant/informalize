// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Informalyze";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
 //   var xhr=XMLHttpRequest();

    var sText = info.selectionText;
  //var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);  
  //window.open(url, '_blank');
    var title;
    
        lib.gimmetendo.getTitle({search: info.selectionText}, (err, result) => {
       
        //alert(result);
		title=result;
        // console.log(result);
  // handle result

});
    
    
    
    
    
    
    lib.gimmetendo.getExcerpt({search: info.selectionText}, (err, result) => {
       
        //alert(result);
		var win = window.open("", "HELLO WORLD", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
            win.document.title = title;

		win.document.body.innerHTML = result;
        chrome.extension.getBackgroundPage().console.log(result);
        // console.log(result);
  // handle result

});
    
    
    

};