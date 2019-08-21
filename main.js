function showStates() {
    document.getElementById("states_dropdown").classList.toggle("show");
    document.getElementById("activities_dropdown").classList.remove("show");

    document.getElementById("close_states").classList.add("close_show");
}

function showActivities() {
    document.getElementById("activities_dropdown").classList.toggle("show");
    document.getElementById("states_dropdown").classList.remove("show");

    document.getElementById("close_activities").classList.add("close_show");
}

function hideActivities() {
    document.getElementById("activities_dropdown").classList.remove("show");

    document.getElementById("close_activities").classList.remove("close_show");
}

function hideStates() {
    document.getElementById("states_dropdown").classList.remove("show");
    
    document.getElementById("close_states").classList.remove("close_show");
}

function killCookies() {
    document.getElementById("cookies_agree").style.bottom = "-400px";
}

// Parallax
(function(){

    var parallax = document.querySelectorAll("header#arizona, header#utah, header#canyoneering_banner"),
        speed = 0.2;
  
    window.onscroll = function(){
      [].slice.call(parallax).forEach(function(el,i){
  
        var windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
  
        el.style.backgroundPosition = elBackgrounPos;
  
      });
    };
  
  })();