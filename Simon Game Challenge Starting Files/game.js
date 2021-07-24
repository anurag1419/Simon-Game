var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;
$(document).keypress(function() {
   if (!started) {
 
     //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
     $("#level-title").text("Level " + level);
     nextSequence();
     started = true;
   }
 });
$(".btn").on("click",function()
{
   var userChosenColor=$(this).attr("id");
   userClickedPattern.push(userChosenColor);
   playSound(userChosenColor);
   animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1)
   
});
function checkAnswer(currentlevel)
{
   if(gamePattern[currentlevel]===userClickedPattern[currentlevel])
   {
      console.log("success");
   
   if(gamePattern.length===userClickedPattern.length)
   {
      setTimeout(function()
      {
      nextSequence();
      },1000)
   }
}
   else{
      playSound("wrong");
     
     // playSound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startover();
   }
}

//var counter=0;

function nextSequence()
{
 
  userClickedPattern=[];
  x=Math.floor(Math.random()*4);
 level++;
 //started =false;
 $("#level-title").text("Level " + level);
var randomChosenColor=buttonColors[x];
/////

gamePattern.push(randomChosenColor);


$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
// var audio=new Audio(randomChosenColor+".mp3");
// audio.play();
}
function playSound(name)
{
   var audio=new Audio(name+".mp3");
   audio.play();
}
function animatePress(currentColor)
{
  $("#"+currentColor).addClass("pressed");
  setTimeout(function()
  {
   $("#" + currentColor).removeClass("pressed");
}, 100);
 }

startover()
{
   level=0;
   gamePattern=[];
   started=false;
}