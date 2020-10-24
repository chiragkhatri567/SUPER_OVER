let score = [0,1,2,3,4,5,6];
console.log(score);
var turn;
var team1 = {
    name:"MI",
    runs:[],
    score:0
};
console.log(team1);
var team2 = {
    name:"CSK",
    runs:[],
    score:0
};
console.log(team2);

window.onload = ()=>{
    selectTurn(); 
    updateButtonText();
    updateScore(); 
     
};


selectTurn=()=>{
console.log("select turn");
turn = Math.round(Math.random())+1;
console.log(turn);
};

updateButtonText =()=>{
    var button = document.getElementById('strike-button');
    console.log(button);
    var result = document.getElementById('result');
    result.style.visibility="";
    console.log(result);
    button.textContent = `${turn===1?team1.name: team2.name} Strike`;
    if(team1.runs.length ==6 && team2.runs.length==6){
    button.remove();
    result.textContent = team1.score === team2.score? `It's a draw`:`${team1.score > team2.score? team1.name:team2.name} WINS`;
}
else{
 turn = team1.runs.length === 6?2:team2.runs.length === 6?1:turn;  
}

}

function updateScore(){
    document.getElementById('team-1-score').textContent = team1.score;
    document.getElementById('team-2-score').textContent = team2.score;
    updateRuns();
}

var handleStrikeButtonClick = ()=>{
    console.log("button click works");
    var runs = score[Math.floor(Math.random()*score.length)];
    console.log(runs);
    runs = runs === 5 ? 'W':runs;
    console.log(runs);
    if(turn===1)
    {
        team1.runs.push(runs);
        team1.score = calculateScore(team1.runs);
        console.log(team1.score);
    }
    else
    {
        team2.runs.push(runs);
        team2.score = calculateScore(team2.runs);
        console.log(team2.score);
    }
    updateButtonText();
    updateScore();
}


var calculateScore = (runs)=>{
    return runs.map(run =>{
        return run =='W'?0:run;
    }).reduce((total,runs)=>total + runs);
}

updateRuns = ()=>{
    var teamOneRunsElement = document.getElementById('team-1-round-runs').children;
    var teamTwoRunsElement =  document.getElementById('team-2-round-runs').children;
    team1.runs.forEach((run,index)=>{
        teamOneRunsElement[index].textContent = run;
    })
    team2.runs.forEach((run,index)=>{
        teamTwoRunsElement[index].textContent = run;
    });
};