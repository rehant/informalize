document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
document.getElementById("def").click();    }
  });

function openCity(evt, cityName,str) {
    // Declare all variables
    
    if(cityName==="Wolfram"){
        		var win = window.open("", "HELLO WORLD", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
            win.document.title = title;

		win.document.body.innerHTML =header+'<div id="Wolfram" class="tabcontent" style="display: all;">'+str+'</div>'+footer;

    }
    
    
  /*  var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
*/
}

