var monElement = document.getElementById("error_p");
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("value")){
monElement.textContent = "Your search '" + searchParams.get("value") + "' was not found"
}
function chercher() {
    var a = document.getElementById("search-bar").value.trim().toLowerCase();
   
    var redirections = {
        "jeb": "/jeb.html",
        "japen": "/japen.html",
        "japen 1": "/japen/japen1.html",
        "japen 2": "/japen/japen2.html",
        "japen 3": "/japen/japen3.html",
        "japen 4": "/japen/japen4.html",
        "japen 5": "/japen/japen5.html",
        "japen 6": "/japen/japen6.html",
        "japen 7": "/japen/japen7.html",
        "japen 8": "/japen/japen8.html",
        "japen 9": "/japen/japen9.html",
        "japen 10": "/japen/japen10.html",
        "japen 11": "/japen/japen11.html",
        "japen 12": "/japen/japen12.html",
        "japen 13": "/japen/japen13.html",
        "japen 14": "/japen/japen14.html",
        "japen 15": "/japen/japen15.html",
        "japen 16": "/japen/japen16.html",
        "japen 17": "/japen/japen17.html",
        "japen 18": "/japen/japen18.html",
        "japen 19": "/japen/japen19.html",
        "vortex": "/vortex.html",
        "contact": "/contact.html",
        "collab": "/collab.html",
        "part": "/part.html",
        "parts": "/part.html", 
        "mod": "/mod.html",
        "mods": "/mod.html",
        "fpsb": "/fpsb-history.html",
        "fpsb x": "/fpsb-x.html",
        "fpsbx": "/fpsb-x.html",
        "fpsb-x": "/fpsb-x.html",
        "fpsb 1": "/fpsb-x/fpsb1.html",
        "fpsb 2": "/fpsb-x/fpsb2.html",
        "fpsb 3": "/fpsb-x/fpsb3.html",
        "fpsb 4": "/fpsb-x/fpsb4.html",
        "fpsb 5": "/fpsb-x/fpsb5.html",
        "fpsb 6": "/fpsb-x/fpsb6.html",
        "fpsb 7": "/fpsb-x/fpsb7.html",
        "fpsb 8": "/fpsb-x/fpsb8.html",
        "fpsb 9": "/fpsb-x/fpsb9.html",
        "fpsb 10": "/fpsb-x/fpsb10.html",
        "fpsb 11": "/fpsb-x/fpsb11.html",
        "fpsb 12": "/fpsb-x/fpsb12.html",
        "spinner": "/spinner.html",
        "modder": "/spinner.html",
        "spinners": "/spinner.html",
        "modders": "/spinner.html",
        "history": "/spinner.html",
        "board": "/spinner.html",
        "boards": "/spinner.html",
        "jojo": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjj5Mjm2OuEAxVaTKQEHTtKCl0QFnoECAcQAQ&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FJoJo%2527s_Bizarre_Adventure&usg=AOvVaw12kTJBI1rF9O_MdlhZ4yai&opi=89978449",
        "menu": "/prsite.html",
        "contact": "/contact.html",
        "collab": "/collab.html",
        "part": "/part.html",
        "mod": "/mod.html",
    };
    

    

    if (redirections[a]) {
        window.location.href = redirections[a];
    } else if(!redirections[a]){
        window.location.href = "/ereur.html?value="+a;
    }
}        

function handleDiscordClick() {
    alert('You can contact me with my discord "walbur" or on a penspinning serveur like the FPSB !');
}

function home() {
    window.location.href = "/prsite.html";
}

function japen() {
    window.location.href = "/japen.html"
}

function fpsb_x() {
    window.location.href = "/fpsb-x.html"
}

function collab() {
    window.location.href = "/collab.html"
}

function contact() {
    window.location.href = "/contact.html"
}

function Part() {
    window.location.href = "/part.html";
}

function mod() {
    window.location.href = "/mod.html"
}

function jeb_board() {
    window.alert("You can talk with jeb on Twitter in wich they are really present . ")
}

// // Fonction pour détecter le défilement
// function handleScroll() {
//     var text = document.getElementById('text_bur');
//     var ref_top = document.getElementById('p-spinner');
//     var triggerPositionTop = ref_top.getBoundingClientRect().top;
//     var windowHeight = window.innerHeight;
  
//     // Si le haut ou le bas du déclencheur est visible
//     if (triggerPosition < windowHeight) {
//       // Ajoutez une classe pour activer l'animation
//       document.querySelector('.typing-animation').classList.add('active');
//       text.style.display = 'flex'
//     } else {
//       // Sinon, enlever la classe pour désactiver l'animation
//       document.querySelector('.typing-animation').classList.remove('active');
//       text.style.display = 'none';
//     }
//   }
  
//   // Ajouter un écouteur d'événements pour le défilement
//   window.addEventListener('scroll', handleScroll);
// Fonction pour détecter le défilement
const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')


document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'

})


const siteOfWalbur = "%c Code with love by Walbur and Wanadoo";
console.log(
    siteOfWalbur,
    `font-size: 20px;
    color: #ff0000;
    font-family:monospace;
    text-align: center;
    display:inline-block;
    padding:5px 10px;
    border-radius:50px;
    border:1px solid #ff0000;`
)

/* This code snippet is setting up a card flip animation effect on a webpage. Here's a breakdown of
what each part does: */
const flip_card = document.querySelectorAll("#flip-card")[0];
const back_card = document.querySelectorAll("#back")[0];
const card_container = document.querySelectorAll("#card-container")[0];
const front = document.querySelectorAll("#front")[0];
// const frontHover = card_container.addEventListener('mouseenter', function() {});
// const BackHover = card_container.addEventListener('mouseleave', function() {});
// function HoverCard() { 
//     if (frontHover) {
//     back_card.style.transform = "rotateY(180deg)";
//     flip_card.style.transform = "rotateY(180deg)";
//     setTimeout(function() {
//         back_card.style.transform = "rotateY(0deg)";
//         flip_card.style.transform = "rotateY(0deg)";
//     }, 2000);
//     } else if(BackHover){
//         setTimeout(function() {
//             back_card.style.transform = "rotateY(180deg)";
//             flip_card.style.transform = "rotateY(180deg)";
//         }, 3000);
//     }
// }
// const cardContainer = document.querySelector("#card-container");
// let timer; // Variable pour stocker l'identifiant du temporisateur

// // Fonction pour démarrer l'animation et le temporisateur
// function startAnimation() {
//     // Démarrer l'animation en tournant toute la carte
//     cardContainer.style.transform = "rotateY(180deg)";
//     // Démarrer le temporisateur pour réinitialiser l'animation après 3 secondes
//     timer = setTimeout(function() {
//         resetAnimation();
//     }, 3000);
// }

// // Fonction pour réinitialiser l'animation
// function resetAnimation() {
//     // Réinitialiser l'animation en retournant la carte à son état initial
//     cardContainer.style.transform = "rotateY(0deg)";
//     // Effacer le temporisateur pour éviter la réinitialisation inutile
//     clearTimeout(timer);
// }

// // Ajouter un écouteur d'événements pour le survol
// cardContainer.addEventListener('mouseenter', function() {
//     startAnimation();
// });

// // Ajouter un écouteur d'événements pour lorsque la souris quitte l'élément
// cardContainer.addEventListener('mouseleave', function() {
//     resetAnimation();
// });

