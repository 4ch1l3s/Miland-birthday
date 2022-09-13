const img = document.getElementById('img')
img.onclick = function() {
    confetti.start();
    setTimeout(function(){confetti.stop();},3000);
}