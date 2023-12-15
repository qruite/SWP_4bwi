var clAusgeklapt = true;
var llAusgeklapt = true;
var plAusgeklapt = true;
var blAusgeklapt = true;

const arrowDown = '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />';
const arrowUp = '<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />';
const arrowCl = document.getElementById('headerArrowCl')
const arrowLl = document.getElementById('headerArrowLl')
const arrowPl = document.getElementById('headerArrowPl')
const arrowBl = document.getElementById('headerArrowBl')


function onClickHandler(competition){

    switch(competition) {
        case "cl":
            if(clAusgeklapt){
                document.getElementById('up_games_content_cl').style.display='none';
                arrowCl.innerHTML = arrowDown;
                clAusgeklapt = false;
            } else {
                document.getElementById('up_games_content_cl').style.display='grid';
                arrowCl.innerHTML = arrowUp;
                clAusgeklapt = true; 
            }
            break;

        case "ll":
            if(llAusgeklapt){
                document.getElementById('up_games_content_ll').style.display='none';
                arrowLl.innerHTML = arrowDown;
                llAusgeklapt = false;
            } else {
                document.getElementById('up_games_content_ll').style.display='grid';
                arrowLl.innerHTML = arrowUp;
                llAusgeklapt = true; 
            }
            break;
        
        case "pl":
            if(plAusgeklapt){
                document.getElementById('up_games_content_pl').style.display='none';
                arrowPl.innerHTML = arrowDown;
                plAusgeklapt = false;
            } else {
                document.getElementById('up_games_content_pl').style.display='grid';
                arrowPl.innerHTML = arrowUp;
                plAusgeklapt = true; 
            }
            break;
        
        case "bl":
            if(blAusgeklapt){
                document.getElementById('up_games_content_bl').style.display='none';
                arrowBl.innerHTML = arrowDown;
                blAusgeklapt = false;
            } else {
                document.getElementById('up_games_content_bl').style.display='grid';
                arrowBl.innerHTML = arrowUp;
                blAusgeklapt = true; 
            }
            break;
    }
}

document.getElementById('up_games_header_cl').addEventListener('click', function() {
    onClickHandler("cl");
});
document.getElementById('up_games_header_laLiga').addEventListener('click', function() {
    onClickHandler("ll");
});
document.getElementById('up_games_header_premierLeague').addEventListener('click', function() {
    onClickHandler("pl");
});
document.getElementById('up_games_header_bundesliga').addEventListener('click', function() {
    onClickHandler("bl");
});

