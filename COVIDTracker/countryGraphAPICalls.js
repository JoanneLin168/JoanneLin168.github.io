const graph_url = "https://api.covid19api.com/total/dayone/country/";
const graph_url_ending = "/status/confirmed";
var graph = null;

var colours = [
    "rgb(255,99,132)",
    "rgb(54,162,235)",
    "rgb(255,205,86)",
    "rgb(75,192,192)",
    "rgb(153,102,255)",
    "rgb(255,159,64)"
]

async function getGraphAPI(url) {
    try {
        // Storing response 
        const response = await fetch(url);

        // Storing data in form of JSON 
        var data = await response.json();

        var dates = [];
        var cases = [];

        if (response) {
            for (var i=0; i<data.length; i++) {
                cases.push(data[i].Cases);
                dates.push(data[i].Date.slice(0, -10));
            }
        }
        if (cases.length > 0) {
            drawGraph(cases, dates);
        }
        else {
            var error = document.getElementById("error");
            console.log(data.message);
            error.textContent = "Unable to generate graph; this may be due to how the API has timeline data for most countries but not all";
        }
    }
    catch (err) {
        var error = document.getElementById("error");
        error.textContent = err.message + " Please try again later";
    }
    
}

function drawGraph(cases, dates) {
    var graphRow = document.getElementById("graphRow");
            if (graphRow.hasChildNodes()) {
                graphRow.innerHTML = "";
            }
    var canvas = document.createElement("canvas");
    canvas.id = "countryGraph";
    graphRow.appendChild(canvas);


    var ctx = canvas.getContext("2d");
    var colour = colours[Math.floor(Math.random() * colours.length)];

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: dates,
            datasets: [{
                label: 'Cumulative Number of Coronavirus Cases',
                backgroundColor: colour,
                borderColor: colour,
                data: cases,
                fill: false
            }]
        },

        // Configuration options go here
        options: {}
    });
}