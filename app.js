const music = document.querySelectorAll(".music");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".motion");
const colors = [
    '#f1a762',
    '#ff8080',
    '#a7e7c0',
    '#a7a6f5',
    '#f3f598',
    '#f788f7',
]
console.log(music)

    for(let i = 0; i < pads.length; i++){

        console.log(music[i]);
        pads[i].addEventListener("click", function() {
            music[i].currentTime = 0;
            music[i].play();
            createBubble(i);
        });
    };

    // pads.forEach((pad, index) => {
    //     pad.addEventListener("click", function() {
    //     music[index].currentTime = 0;
    //     music[index].play();
    //     // createBubble(index);
    //     });
    // });

    function createBubble(i){
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[i];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
        });
      };