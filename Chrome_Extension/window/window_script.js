
document.addEventListener('DOMContentLoaded', function() {
    var wikip = document.getElementById('wikip');
    var wolframa = document.getElementById('wolframa');
    var etcd = document.getElementById('etcd');
    // onClick's logic below:
    wikip.addEventListener('click',function() {
        openCity(event, 'Wiki');
    });
    wolframa.addEventListener('click', function() {
        openCity(event, 'Wolfram');
    });
    etcd.addEventListener('click', function() {
        openCity(event, 'etc');
    });
});

document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        document.getElementById("wikip").click();}
        document.getElementById("generate-here").innerHTML = '<ol><li>' + excerpt + '</li></ol>';
  });

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

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
}
