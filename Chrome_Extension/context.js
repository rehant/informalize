
// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  
}

var context = "selection"
var title = "Inform Wolfram"
var title2 = "Inform Wiki"
var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick});
var id = chrome.contextMenus.create({"title": title2, "contexts":[context],
                                       "onclick": genericOnClick});

