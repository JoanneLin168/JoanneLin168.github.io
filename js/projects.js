allProjects = {
    "complete" : [
        {
            "title": "Cards Against Humanity Remake Website",
            "text": "Created a website using ASP.NET Core MVC Framework to play Cards Against Humanity with friends.",
            "link": "https://cahremake.azurewebsites.net/",
            "image": "images/CAHR.png",
            "date": "May 2020 - August 2020"
        },
        {
            "title": "OPTIJJ Laboratory",
            "text": "Created a Sci-Fi dungeon crawler-esque game using Python and the Pygame library for the CSS Gamejam 2020 in a team of 6.",
            "link": "https://github.com/JoanneLin168/OPTIJJ-Gamejam-2020",
            "image": "images/OPTIJJ.png",
            "date": "November 2020"
        },
        {
            "title": "Pong Machine Learning",
            "text": "Created a machine-learning program that will self teach how to play pong. Produced graphs at the end of the program.",
            "link": "https://github.com/JoanneLin168/pongML",
            "image": "images/pongML.png",
            "date": "January 2021"
        },
        {
            "title": "Covid Tracker",
            "text": "Created a website that allows users to view the trends of coronavirus around the globe.",
            "link": "https://joannelin168.github.io/COVIDTracker.html",
            "image": "images/COVIDTracker.png",
            "date": "January 2021"
        },
        {
            "title": "Online Whiteboard",
            "text": "Creating a website that allows multiple users to draw on a whiteboard together",
            "link": "http://jyl-online-whiteboard.herokuapp.com/",
            "image": "images/whiteboard.png",
            "date": "September 2021"
        },
        {
            "title": "Santa's Workshop",
            "text": "Created a simulation that allows users to make an RPC to a server which simulates Santa's Workshop via multithreading.",
            "link": "https://github.com/JoanneLin168/Santas-Workshop",
            "image": "images/SantasWorkshop.png",
            "date": "December 2021"
        }

    ],
    "incomplete": []
}

showcase = [
    {
        "title": "Online Whiteboard",
        "text": "Creating a website that allows multiple users to draw on a whiteboard together",
        "link": "http://jyl-online-whiteboard.herokuapp.com/",
        "image": "images/whiteboard.png",
        "date": "September 2021"
    },
    {
        "title": "Cards Against Humanity Remake Website",
        "text": "Created a website using ASP.NET Core MVC Framework to play Cards Against Humanity with friends.",
        "link": "https://cahremake.azurewebsites.net/",
        "image": "images/CAHR.png",
        "date": "May 2020 - August 2020"
    },
    {
        "title": "Pong Machine Learning",
        "text": "Created a machine-learning program that will self teach how to play pong. Produced graphs at the end of the program.",
        "link": "https://github.com/JoanneLin168/pongML",
        "image": "images/pongML.png",
        "date": "January 2021"
    },
]

complete = allProjects.complete.reverse();
incomplete = allProjects.incomplete.reverse();

function displayProjects(type, projects) {
    var displayArea = document.getElementById(type); // type is a string

    var index = 0;
    
    var row = document.createElement("div");
    row.className = "row";
    row.id = type+"_row";
    displayArea.appendChild(row);
    
    while (index < projects.length) {
        row.innerHTML += `
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <a href="`+projects[index].link+`" target="_blank"><img src="`+projects[index].image+`" class="card-img-top" alt="Missing image"></a>
                <div class="card-body">
                    <h5 class="card-title">`+projects[index].title+`</h5>
                    <p class="card-text">`+projects[index].text+`</p>
                    <p class="card-text"><small class="text-muted">`+projects[index].date+`</small></p>
                </div>
            </div>
        </div>
        `;
        
        index++;
    }
}

function displayShowcase() {
    var displayArea = document.getElementById("showcase");

    var index = 0;
    var row = document.createElement("div");
    row.className = "row";
    displayArea.appendChild(row);
    
    while (index < showcase.length) {
        row.innerHTML += `
        <div class="col-sm-4">
            <div class="card mb-3">
                <a href="`+showcase[index].link+`" target="_blank"><img src="`+showcase[index].image+`" class="card-img-top" alt="Missing image"></a>
                <div class="card-body">
                    <h5 class="card-title">`+showcase[index].title+`</h5>
                    <p class="card-text">`+showcase[index].text+`</p>
                    <p class="card-text"><small class="text-muted">`+showcase[index].date+`</small></p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal`+index+`">More details</button>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modal`+i+`" tabindex="-1" role="dialog" aria-labelledby="modal`+i+`Label" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal`+i+`Label">`+showcase[index].title+`</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        index++;
    }
}



