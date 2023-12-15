const loadDate = () =>{
    fetch("https://api.openligadb.de/getgoalgetters/bl1/2023").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillTable(data);
        })
    })
}

const fillTable = (data) => {
    let html = "";

    data.slice(0, 10).forEach(element => {
        player = element.goalGetterName;
        goals = element.goalCount;

        console.log(goals);


        html += "<div class='ranking_section_grid'> \n" +
                    "<div class='ranking_section_grid_left'> \n" +
                        "<div class='placement'>1</div> \n" +
                        "<div class='player'>" + player + "</div> \n" +
                    "</div> \n" +

                    "<div class='ranking_section_grid_middl'> \n" +
                        "<div class='playerAge'>33</div> \n" +
                        "<div class='playerNationality'>Aut</div> \n" +
                        "<div class='playerTeam'> \n" +
                            "<div class='team'>Bayern München</div> \n" +
                            "<div class='teamLiga'>Bundesliga</div> \n" +
                        "</div> \n" +
                    "</div> \n" +

                    "<div class='ranking_section_grid_right'> \n" +
                        "<div class='gamesPlayed'>10</div> \n" +
                        "<div class='goalsScored'>" + goals + "</div> \n" +
                        "<div class='totalAssist'>0</div> \n" +
                        "<div class='totalPoints'>" + goals + "</div> \n" +
                    "</div> \n" + 
                "</div>";
    });

    document.getElementById("section_component_table").innerHTML += html;
}

loadDate();