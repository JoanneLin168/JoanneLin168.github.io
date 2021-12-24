allProjects = {
    "complete" : [
        {
            "title": "Cards Against Humanity Remake Website",
            "summary": "A website using ASP.NET Core MVC Framework and SignalR to play Cards Against Humanity with friends.",
            "content": "Cards Against Humanity Remake (aka CAHR) is a website created during the first Covid lockdown so my friends and I could play one of our favourite games: Cards Against Humanity. I mainly coded this myself, with the help of a friend who set up the project.",
            "link": "https://cahremake.azurewebsites.net/",
            "languages": "C#, HTML, JavaScript and CSS",
            "image": "images/CAHR.png",
            "date": "May 2020 - August 2020"
        },
        {
            "title": "OPTIJJ Laboratory",
            "summary": "A Sci-Fi dungeon crawler-esque game using Python and the Pygame library for the CSS GameJam 2020 in a team of 6.",
            "content": "At the 2020 CSS Game GameJam, I had to program a game in a team of 6 and the game needed to follow the theme: 'Keep moving forward'. OPTIJJ Laboratory is a Sci-Fi Dungeon Crawler-eque game where the player could only move forward and avoid the traps/malfunctioned robots!",
            "link": "https://github.com/JoanneLin168/OPTIJJ-Gamejam-2020",
            "languages": "Python",
            "image": "images/OPTIJJ.png",
            "date": "November 2020"
        },
        {
            "title": "Pong Machine Learning",
            "summary": "A machine-learning program that will self teach how to play pong.",
            "content": "The AI used a very simple algorithm to figure out the multipliers, which determine whether the AI needed to move left or right. The program produced graphs at the end of 100 generations.",
            "link": "https://github.com/JoanneLin168/pongML",
            "languages": "Python",
            "image": "images/pongML.png",
            "date": "January 2021"
        },
        {
            "title": "Covid Tracker",
            "summary": "A website that allows users to view the trends of coronavirus around the globe.",
            "content": "Covid Tracker is a website that uses data from https://covid19api.com and displays a graph showing the cumulative number of coronavirus cases based on which country the user has searched for.",
            "link": "https://joannelin168.github.io/COVIDTracker.html",
            "languages": "HTML, JavaScript and CSS",
            "image": "images/COVIDTracker.png",
            "date": "January 2021"
        },
        {
            "title": "JYL Online Whiteboard",
            "summary": "A website that allows multiple users to draw on a whiteboard together",
            "content": "JYL Online Whiteboard was created because my university friends and I often required a whiteboard to write down ideas together. However, we did not know of many reliable whiteboards and so I decided to create my own one.",
            "link": "http://jyl-online-whiteboard.herokuapp.com/",
            "languages": "Python, HTML, JavaScript and CSS",
            "image": "images/whiteboard.png",
            "date": "September 2021"
        },
        {
            "title": "Santa's Workshop",
            "summary": "A simulation that allows users to make an RPC to a server which simulates Santa's Workshop using concurrency.",
            "content": "Santa's Workshop is a simulation showing Santa and the Elves working together to prepare for Christmas! Santa plans his route using the Nearest Neighbour Heuristic, while the elves prepare the presents simultaneously via multi-threading, and mutex locks/semaphores.",
            "link": "https://github.com/JoanneLin168/Santas-Workshop",
            "languages": "Golang",
            "image": "images/SantasWorkshop.png",
            "date": "December 2021"
        }

    ],
    "incomplete": []
}

showcase = [
    {
        "title": "Santa's Workshop",
        "text": "A simulation that allows users to make an RPC to a server which simulates Santa's Workshop using concurrency.",
        "languages": "Golang",
        "image": "images/SantasWorkshop.png",
        "date": "December 2021"
    },
    {
        "title": "JYL Online Whiteboard",
        "text": "A website that allows multiple users to draw on a whiteboard together",
        "languages": "Python, HTML, JavaScript and CSS",
        "link": "http://jyl-online-whiteboard.herokuapp.com/",
        "image": "images/whiteboard.png",
        "date": "September 2021"
    },
    {
        "title": "Cards Against Humanity Remake Website",
        "text": "A website using ASP.NET Core MVC Framework to play Cards Against Humanity with friends.",
        "languages": "C#, HTML, JavaScript and CSS",
        "link": "https://cahremake.azurewebsites.net/",
        "image": "images/CAHR.png",
        "date": "May 2020 - August 2020"
    }
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

    if (projects.length < 1) {
        row.innerHTML = "There are currently no projects here."
    }
    
    while (index < projects.length) {
        row.innerHTML += `
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <a href="`+projects[index].link+`" target="_blank"><img src="`+projects[index].image+`" class="card-img-top" alt="Missing image"></a>
                <div class="card-body">
                    <h5 class="card-title">`+projects[index].title+`</h5>
                    <p class="card-text">`+projects[index].summary+`</p>
                    <p class="card-text"><small class="text-muted">Languages: `+projects[index].languages+`</small></p>
                    <p class="card-text"><small class="text-muted">`+projects[index].date+`</small></p>
                    <a class="btn btn-primary" data-toggle="modal" data-target="#modal`+index+`">More details</a>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="modal`+index+`" tabindex="-1" role="dialog" aria-labelledby="modal`+index+`Label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal`+index+`Label">`+projects[index].title+`</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">`+projects[index].content+`</div>
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

function displayShowcase() {
    var displayArea = document.getElementById("showcase");

    var index = 0;
    var row = document.createElement("div");
    row.className = "row";
    displayArea.appendChild(row);

    if (showcase.length < 1) {
        row.innerHTML = "There are currently no projects here."
    }
    
    while (index < showcase.length) {
        row.innerHTML += `
        <div class="col-sm-4">
            <div class="card mb-3">
                <a href="`+showcase[index].link+`" target="_blank"><img src="`+showcase[index].image+`" class="card-img-top" alt="Missing image"></a>
                <div class="card-body">
                    <h5 class="card-title">`+showcase[index].title+`</h5>
                    <p class="card-text">`+showcase[index].text+`</p>
                    <p class="card-text"><small class="text-muted">Languages: `+showcase[index].languages+`</small></p>
                    <p class="card-text"><small class="text-muted">`+showcase[index].date+`</small></p>
                </div>
            </div>
        </div>
        `;
        
        index++;
    }
}



