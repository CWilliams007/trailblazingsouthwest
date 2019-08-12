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
