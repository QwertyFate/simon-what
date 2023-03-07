var colors = ["green", "red", "yellow", "blue"];
var gamingpattern =[];
var usergamepattern = [];
var level = 0;
var started = false;
var gamoversound = new Audio("sounds/wrong.mp3");

$("#level-title").click(function(){
    nextSequence();
    started = true;
});
                        
$(document).keydown(function(event){
    if(started == true){
        
        console.log(event.key);
        
    } else {
        startA(event.key);
        $(".btn").click(function(event){
        var buttonclicked = $(event.target).attr("id");
        usergamepattern.push(buttonclicked);
        animatepress(buttonclicked);
        var clicksound = new Audio("sounds/" + buttonclicked + ".mp3");
        clicksound.play();
        checking(usergamepattern.length - 1);
            
        })
    }

});


function checking(round){
    if (usergamepattern[round] === gamingpattern[round]){
        console.log("good");
        if (gamingpattern.length == usergamepattern.length && gamingpattern[round] == usergamepattern[round]){

            setTimeout(function(){
                nextSequence();
            },1000);
            
        }
    }else{
        gamoversound.play();
        $("#level-title").text("FUCK YOU GAME OVER");
        $("body").addClass("game-over");
        setTimeout(function(){
            location.reload();
        }, 3000)
    }

    
        

}
    
    
function startA(key){
    switch (key) {
        case "a":
            nextSequence();
            started = true;
            break;
    
        default:
            console.log(key);
    }
};
   

function nextSequence() {
    var randomNumber = Math.floor((Math.random()*4) + 1); 
    var randomcolor = colors[randomNumber -1];
    gamingpattern.push(randomcolor);
    $("." + randomcolor).fadeOut(100).fadeIn(100);
    var playsound = new Audio("sounds/" + randomcolor + ".mp3")
    playsound.play();
    level ++;
    $("#level-title").text("level " + level);
    usergamepattern = [];

}
function animatepress(buttonpressed){
        $("." + buttonpressed).addClass("pressed");
        setTimeout(function(){
            $("." + buttonpressed).removeClass("pressed");
        }, 100)
    
};
