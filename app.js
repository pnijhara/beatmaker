const music = document.querySelectorAll(".music");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".motion");
console.log(music)

    for(var i = 0; i < pads.length; i++){
        console.log(pads[i]);
        pads[i].addEventListener("click", function(){
            music[i].currentTime = 0;
            music[i].play();
        });
    };

    // pads.forEach((pad, index) => {
    //     pad.addEventListener("click", function() {
    //     music[index].currentTime = 0;
    //     music[index].play();
    //     // createBubble(index);
    //     });
    // });