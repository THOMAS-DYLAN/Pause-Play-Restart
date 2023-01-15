//for the most part... things that were commented out are a part of an interval pause and play system.


// console.log($(".word").text())
var mute = false;
var interval = false;
var x;
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'd69b841f-0202-4edd-a041-ce4667be7dd9.m4a');
duration = audioElement.duration;
// $(".word").css({ 'color': 'rgb(250, 250, 250, .8)', 'text-shadow': '5px 5px black' }).show().delay(2500)


$(".refresh").click(() => {
   interval = false;
   $(".word").text("Hi");
   clearInterval(x)
   $(".button").text("Play Me!");
   audioElement.currentTime = 0;
   audioElement.pause()
})

$(".play").click(() => {
   if (interval == false) {
      interval = true
      audioElement.play();
      // x = setInterval(() => {
      //    switch ($(".word").text()) {
      //       case "Hi":
      //          $(".word").text("How");
      //          break;
      //       case "How":
      //          $(".word").text("You");
      //          break;
      //       case "You":
      //          $(".word").text("Doin'?");
      //          break;
      //       case "Doin'?":
      //          $(".word").text("Hi");
      //    }
      // }, 800);
   }
})

$(".pause").click(() => {
   if (interval == true) {
      interval = false;
      audioElement.pause();
      // clearInterval(x)
   }
})

$(".volume").click(()=>{
   if(mute == false){
      mute = true;
      $(".volume").text("volume_off")
      audioElement.volume = 0
   }else{
      mute = false;
      $(".volume").text("volume_up")
      audioElement.volume = 1
   }
})