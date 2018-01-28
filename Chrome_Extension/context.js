// Set up context menu at install time.
var header='<head><title>informalyze</title><link rel="stylesheet" type="text/css" href="window_style.css"><script src="window_script.js"></script></head>';
var footer='<table id="centerthis"><tr><td><button class="tablinks" onclick="openCity(event, "Wiki")" id="def">Wiki</button></td><td> <button class="tablinks" onclick="openCity(event, "Wolfram")">Wolfram</button></td> <td> <button class="tablinks" onclick="openCity(event, "etc")">etc</button></td></tr></table>';
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Informalyze";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

var wolframResults="";

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

		win.document.body.innerHTML =header+'<div id="Wiki" class="tabcontent" style="display: all;">'+result+'</div>'+footer;


});
    
    
    
     lib.gimmetendo.getWolfram({search: info.selectionText}, (err, result) => {
       
     
        
        wolframResults=result;
        //alert(result);
	/*	var win = window.open("", "HELLO WORLD", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
            win.document.title = title;

		win.document.body.innerHTML =header+'<div id="Wolfram" class="tabcontent" style="display: all;">'+result+'</div>'+footer;
*/

});   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

};