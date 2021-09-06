allProjects = {
    "complete" : [
        {
            "title": "Revize",
            "text": "Created a website using PHP that provides study tools to help mainly A-Level Students to study for their exams.",
            "link": "http://revize.altervista.org/",
            "image": "images/ReVize.png",
            "date": "January 2019 - March 2019"
        },
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
            "image": "images/CAHR.png",
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
            "text": "Creating a website that allows users to view the trends of coronavirus around the globe.",
            "link": "https://github.com/JoanneLin168/pongML",
            "image": "images/COVIDTracker.png",
            "date": "January 2021"
        }

    ],
    "incomplete": [
        {
            "title": "Online Whiteboard",
            "text": "Creating a website that allows multiple users to draw on a whiteboard together",
            "link": "http://jyl-online-whiteboard.herokuapp.com/",
            "image": "images/whiteboard.png",
            "date": "September 2021"
        }
    ]
}

/*
<div class="col-md-4">
    <div class="card" style="width: 18rem;">
        <img src="images/mario.png" class="card-img-top" alt="mario.png">
        <div class="card-body">
            <h5 class="card-title">marioML</h5>
            <div class="accordion" id="accordion6">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="true" aria-controls="collapse">
                    Click here to read more
                </button>
                </div>
                <div id="collapse6" class="collapse" aria-labelledby="heading6" data-parent="#accordion6">
                    <p class="card-text">Working with a friend to create a machine learning project that can tell if an image is Mario or not</p>
                    <a href="https://github.com/JoanneLin168/marioML" class="card-link">Link here!</a>
                </div>
            <p class="card-text"><small class="text-muted">December 2020</small></p>
            
        </div>
    </div>
</div>
*/

complete = allProjects.complete.reverse();
incomplete = allProjects.incomplete.reverse();

function displayProjects(type, projects) {
    var displayArea;
    displayArea = document.getElementById(type); // type is a string

    var index = 0;
    var rowCounter = -1;
    while (index < projects.length) {
        if (index == 0 || (index % 4 == 1 && index != 1)) {
            rowCounter++;
            var row = document.createElement("div");
            row.className = "row";
            row.id = type+"_row_"+rowCounter;
            displayArea.appendChild(row);
        }

        var row = document.getElementById(type+"_row_"+rowCounter);
        row.innerHTML += `
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img src="`+projects[index].image+`" class="card-img-top" alt="Missing image">
                <div class="card-body">
                    <h5 class="card-title">`+projects[index].title+`</h5>
                    <p class="card-text">`+projects[index].text+`</p>
                    <p class="card-text"><small class="text-muted">`+projects[index].date+`</small></p>
                    <a href="`+projects[index].link+`" class="btn btn-primary">Link here!</a>
                </div>
            </div>
        </div>
        `;
        
        index++;
    }
}

displayProjects("complete", complete);
displayProjects("incomplete", incomplete);