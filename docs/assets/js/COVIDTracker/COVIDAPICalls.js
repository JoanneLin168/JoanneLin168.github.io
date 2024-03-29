// Reference: https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/

// api url 
const api_url =  
      "https://api.covid19api.com/summary";
var countriesData = null;
var globalData = null;
var countries = [];

// Defining async function 
async function getCovidAPI(url) {
    try {
        // Storing response 
        const response = await fetch(url);

        // Storing data in form of JSON 
        var data = await response.json();
    
        if (response) {
            // Stores countries data
            countriesData = data.Countries;
            for (var i=0; i<countriesData.length; i++) {
                countries.push(countriesData[i].Country);
            }
    
            // Stores global data
            globalData = data.Global;
        }
    }
    
    catch (err) {
        var error = document.getElementById("error");
        error.textContent = (err.message + " Please try again later");
    }
}

function getCountryData(country) {
    var countryData = null;
    for (var i=0; i<countriesData.length; i++) {
        if (countriesData[i].Country == country) {
            countryData = countriesData[i];
            break
        }
    }
    show(countryData);

}

function getGlobalData() {
    var data = globalData;
    data.Country = "Global";
    data.CountryCode = "n/a";
    data.Date = countriesData[0].Date;
    show(data);
}

function getSlug(country) {
    var countrySlug = null;
    for (var i=0; i<countriesData.length; i++) {
        if (countriesData[i].Country == country) {
            countrySlug = countriesData[i].Slug;
            break
        }
    }
    return countrySlug;
}

// Function to define innerHTML for HTML table 
function show(data) {
    var country = document.getElementById("country");
    var code = document.getElementById("code");
    var deathsToday = document.getElementById("deathsToday");
    var confirmedToday = document.getElementById("confirmedToday");
    var recoveredToday = document.getElementById("recoveredToday");
    var totalDeaths = document.getElementById("totalDeaths");
    var totalConfirmed = document.getElementById("totalConfirmed");
    var totalRecovered = document.getElementById("totalRecovered");
    var updatedAt = document.getElementById("updatedAt");


    country.textContent = "Country name: " + data.Country;
    code.textContent = "Country code: " + data.CountryCode;
    deathsToday.textContent = "Deaths today: " + data.NewDeaths;
    confirmedToday.textContent = "Confirmed cases today: " + data.NewConfirmed;
    recoveredToday.textContent = "Recovered cases today: " + data.NewRecovered;
    totalDeaths.textContent = "Total deaths: " + data.TotalDeaths;
    totalConfirmed.textContent = "Total confirmed: " + data.TotalConfirmed;
    totalRecovered.textContent = "Total recovered: " + data.TotalRecovered;
    updatedAt.textContent = "Updated at: " + data.Date;
} 

getCovidAPI(api_url);