console.log($(".word").text())
var interval = false;
var x;
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'd69b841f-0202-4edd-a041-ce4667be7dd9.m4a');

$(".refresh").click(() => {
   interval = false;
   $(".word").text("Hi").css('color', 'white');
   clearInterval
   $(".button").css({ 'background-color': 'white' }).text("Play Me!");
   audioElement.currentTime = 0;
   audioElement.pause()
})

$(".button").click(() => {
   if (interval == false) {
      interval = true
      audioElement.play();
   } else {
      interval = false;
      audioElement.pause();
      clearInterval(x)
   }
   if (interval == false) {
      $(".button").css({ 'background-color': 'red' }).text("");
      clearInterval(x)
   } else if (interval == true) {
      $(".button").css({ 'background-color': 'green' }).text("");
      x = setInterval(() => {
         switch ($(".word").text()) {
            case "Hi":
               $(".word").text("How").css({ 'color': 'purple', 'text-shadow': '13px 0 white' });
               break;
            case "How":
               $(".word").text("You").css({ 'color': 'orange' });
               break;
            case "You":
               $(".word").text("Doin'?").css('color', 'purple');
               break;
            case "Doin'?":
               $(".word").text("Hi").css({ 'color': 'white', "text-shadow": "none" });
         }
      }, 800);
   }
   console.log(interval);
})
