const currentDateBl = document.getElementById("headerBlHeutigesDatum").innerHTML;
const currentDatePl = document.getElementById("headerPlHeutigesDatum").innerHTML;
const currentDateCl = document.getElementById("headerClHeutigesDatum").innerHTML;
const currentDateLl = document.getElementById("headerLlHeutigesDatum").innerHTML;

const idBl = "up_games_content_bl";
const idPl = "up_games_content_pl";
const idLl = "up_games_content_ll";
const idCl = "up_games_content_cl";

const loadUpGamesData = () =>{
    fetch("https://api.openligadb.de/getmatchdata/cl1/2023").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillUpGamesTable(data);
        })
    }) 

    /*fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillUpGamesTable(data, currentDateBl, idBl);
        })
    })

    fetch("https://api.openligadb.de/getmatchdata/laliga1/2023").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillUpGamesTable(data, currentDateLl, idLl);
        })
    })

    fetch("https://api.openligadb.de/getmatchdata/pl1/2023").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillUpGamesTable(data, currentDatePl, idPl);
        })
    })*/
}

const fillUpGamesTable = (data) => {
    let html = "";
    let foundGames = false;
    
    data.forEach(element => {
        if(headerDateFormat(element.matchDateTime) === "12/12/2023"){
            foundGames = true;
            let matchDate = formatDate(element.matchDateTime);
            let matchTime = formatTime(element.matchDateTime);
    
            html += "<div class='game_box'> \n" +
                        "<div class='game_box_left_part'> \n" +
                            "<h1>"+ matchDate +"</h1> \n" +
                            "<h2>"+ matchTime +"</h2> \n" +
                        "</div> \n" +
                        "<div class='game_box_right_part'> \n" +
                            "<div class='home_team'>" + element.team1.teamName + "</div> \n" +
                            "<div class='away_team'>" + element.team2.teamName + "</div> \n" +
                        "</div> \n" +
                    "</div>";
        }
    });

    if(!foundGames) {
        html += "<div class='game_box'> \n" +
                    "<div class='noGamesFound'> \n" +
                        "<div class=''>keine Spiele gefunden</div> \n" +
                    "</div> \n" +
                "</div>";
    }

    document.getElementById(id).innerHTML += html;
}

const formatDate = (matchDateTime) => {
    const dateObj = new Date(matchDateTime);

    const months = [
        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    const formattedDate = day + ' ' + months[month] + ' ' + year;
    return formattedDate;
}

const formatTime = (matchDateTime) => {
    const dateObj = new Date(matchDateTime);

    const hours = dateObj.getHours()
    const minutes = dateObj.getMinutes();

    const formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
    return formattedTime;
}

const headerDateFormat = (matchDateTime) => {
    const dateObj = new Date(matchDateTime);

    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();

    let formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
    return formattedDate;
}


loadUpGamesData();