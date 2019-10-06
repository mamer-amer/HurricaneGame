function stopGame() {
    window.location.href = "https://www.quasarrisk.com/"
}

 window.onload = function myFunction() {
     setTimeout(function () {
         this.stopGame();
     }
        , 15000);
}