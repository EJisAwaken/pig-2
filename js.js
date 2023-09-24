let dices = [
    "img/one.jpg",
    "img/two.jpg",
    "img/three.jpg",
    "img/four.jpg",
    "img/five.jpg",
    "img/six.jpg"
];
let dice = document.querySelector(".imgDice")
let rollDice = document.querySelector("#roolDice");
let hold = document.querySelector("#hold");
let joueur1 = document.querySelector("#player1");
let joueur2 = document.querySelector("#player2");
let joueur = document.querySelectorAll(".player");
let currentS = document.querySelectorAll(".scoreC"); // Current score de depart
let scoreF1 = document.querySelector("#scoreF1"); // Current score de depart
let scoreF2 = document.querySelector("#scoreF2"); // Current score de depart
let scoreC1 = 0;
let scoreC2 = 0;
let score1=0;
score1 +=scoreC1;
let s1 = 0;
let s2 = 0;


// INITIALIASTION DU JEU

window.addEventListener("load", ()=>{
    joueur1.classList.add("changePlayer")
})


// Cette fonction nous permet de tourner le dée
function turnTheDice(){
    let random = Math.floor(Math.random()*dices.length);
    dice.src = dices[random];
    let valeur = random+1;


        if (valeur === 1){
                joueur1.classList.toggle("changePlayer");
                joueur2.classList.toggle("changePlayer");
        };


        currentS.forEach(function (value, index, array) {

            if (valeur !== 1 && index === 0 && joueur1.classList.contains("changePlayer")){
                scoreC1 += valeur;
                console.log(scoreC1);
                value.innerHTML = scoreC1;

                if (scoreC1 >=20){
                    alert("Le joueur 1 à gagner");
                    location.reload();
                }
            }
            else if (valeur !== 1 && index === 1 && joueur2.classList.contains("changePlayer")){
                scoreC2 += valeur;
                value.innerHTML = scoreC2;
                console.log("la claasse n'est là");
                if (scoreC2 >= 20){
                    alert("Le joueur 2 à gagner");

                    location.reload();
                }
            }
        });

    if (valeur === 1){
        currentS.forEach(function (value, key, parent) {
            value.innerHTML = scoreC1;
            value.innerHTML = scoreC2;
            scoreC1 =0;
            scoreC2 =0;
        })
    };
}



rollDice.addEventListener("click", turnTheDice);
