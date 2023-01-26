 // Global variables
 var cityList = [];
 var cityName;
 

// local storage functions
initcityList();
initWikipedia();

function rendercitys(){
    $("#list-of-cities").empty();
    $("#city-name").val("");
    
    for (i=0; i<cityList.length; i++){
        var a = $("<a>");
        a.addClass("button is-inline px-4 m-4 city");
        a.attr("data-name", cityList[i]);
        a.text(cityList[i]);
        $("#list-of-cities").prepend(a);
    } 
}
// This function pulls the city list array from local storage
function initcityList() {
    var storedcitys = JSON.parse(localStorage.getItem("cities"));
    
    if (storedcitys !== null) {
        cityList = storedcitys;
    }
    
    rendercitys();
    }
// This function pull the current city into local storage to display the current info on reload
function initWikipedia() {
    var storedWikipedia = JSON.parse(localStorage.getItem("wikipedia"));

    if (storedWikipedia !== null) {
        cityName = storedWikipedia;

        displayWikipedia();
    }
}

// This function saves the city array to local storage
function storecityArray() {
    localStorage.setItem("cities", JSON.stringify(cityList));
    }

// This function saves the currently displayed city to local storage
function storeCurrentcity() {

    localStorage.setItem("currentcity", JSON.stringify(cityName));
}
      
// Click event handler for city search button
$(".search-btn").on("click", function(event){
    event.preventDefault();

    cityName = $("#city-name").val().trim();
    if(cityName === ""){
        alert("Please enter a city to look up")

    }else if (cityList.length >= 3){  
        cityList.shift();
        cityList.push(cityName);

    }else{
    cityList.push(cityName);
    }
    storeCurrentcity();
    storecityArray();
    rendercitys();
    // displayWikipedia();
});
