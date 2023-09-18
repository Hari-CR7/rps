var choice = ["rock", "paper", "scissor"];
var computerChoice = $(".holder");
var chosen = $(".chosen");
var result = $(".result");

$("#rock").click(function(){
    var img = '<img src="./img/rock.png" alt="paper-img" class="chosen-img">';
    chosen.html(img);
    play();
    if(computerChoice.hasClass("scissor")){
        result.text("Player Won");
        computerChoice.removeClass("scissor");
    }
    else if(computerChoice.hasClass("paper")){
        result.text("Computer Won");
        computerChoice.removeClass("paper");
    }
    else{
        result.text("Draw");
        computerChoice.removeClass("rock");
    }
});
$("#paper").click(function(){
    var img = '<img src="./img/paper.png" alt="paper-img" class="chosen-img">';
    chosen.html(img);
    play();
    if(computerChoice.hasClass("scissor")){
        result.text("Computer Won");
        computerChoice.removeClass("scissor");
    }
    else if(computerChoice.hasClass("rock")){
        result.text("Player Won");
        computerChoice.removeClass("rock");
    }
    else{
        result.text("Draw");
        computerChoice.removeClass("paper");
    }
});
$("#scissor").click(function(){
    var img = '<img src="./img/scissor.png" alt="paper-img" class="chosen-img">';
    chosen.html(img);
    play();
    if(computerChoice.hasClass("paper")){
        result.text("Player Won");
        computerChoice.removeClass("paper");
    }
    else if(computerChoice.hasClass("rock")){
        result.text("Computer Won");
        computerChoice.removeClass("rock");
    }
    else{
        result.text("Draw");
        computerChoice.removeClass("scissor");
    }
});

function play() {

    var a = Math.floor(Math.random() * 3);
    var ch = choice[a];
    switch (ch) {
        case "rock":
            computerChoice.html('<img src="./img/rock.png" alt="rock-img" class="chosen-img"></img>');
            computerChoice.addClass("rock");
            break;
        case "paper":
            computerChoice.html('<img src="./img/paper.png" alt="paper-img" class="chosen-img"></img>');
            computerChoice.addClass("paper");
            break;
        case "scissor":
            computerChoice.html('<img src="./img/scissor.png" alt="scissor-img" class="chosen-img"></img>');
            computerChoice.addClass("scissor");
            break;
        default:
            console.log("invalid");
    }
}
