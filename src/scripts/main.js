
var image = document.getElementById("chair");
var i = 0;

image.addEventListener('click', function() { 
    breakChair('chair', i);
    i=i+1;
}); 





function breakChair(id, i) {
    var image = document.getElementById(id);

    var audio = new Audio('src/sound/rozbitaZidle.mp3');
    audio.play();
    switch(i) {
        case 0:
            image.src="src/img/brokenChair.webp";
            break;
        case 1:
            image.src="src/img/brokenChair2.jpg";
            break;
        case 2:
            image.src="src/img/brokenChair3.jpg";
            break;
        case 3:
            image.src="src/img/brokenChair4.gif";
            setTimeout(function() {
                document.body.innerHTML = '';
            }, 1500);
            break;
        default:
            alert("Nevim co jsi udělal, ale dostal jsi se kam jsi neměl.");
            close
            break;
        }
    }