if (window.location.pathname === '/index.html') {
    window.history.replaceState(null, '', '/');
}
var monElement = document.getElementById("error_p");
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("value")){
    monElement.textContent = "Your search '" + searchParams.get("value") + "' was not found"
}
function chercher() {
    var a = document.getElementById("search-bar").value.trim().toLowerCase(); 
    var redirections = {
        "jeb": "jeb.html",
        "japen": "japen.html",
        "japen 1": "japen/japen1.html",
        "japen 2": "japen/japen2.html",
        "japen 3": "japen/japen3.html",
        "japen 4": "japen/japen4.html",
        "japen 5": "japen/japen5.html",
        "japen 6": "japen/japen6.html",
        "japen 7": "japen/japen7.html",
        "japen 8": "japen/japen8.html",
        "japen 9": "japen/japen9.html",
        "japen 10": "japen/japen10.html",
        "japen 11": "japen/japen11.html",
        "japen 12": "japen/japen12.html",
        "japen 13": "japen/japen13.html",
        "japen 14": "japen/japen14.html",
        "japen 15": "japen/japen15.html",
        "japen 16": "japen/japen16.html",
        "japen 17": "japen/japen17.html",
        "japen 18": "japen/japen18.html",
        "japen 19": "japen/japen19.html",
        "vortex": "vortex.html",
        "contact": "contact.html",
        "collab": "collab.html",
        "part": "part.html",
        "parts": "part.html", 
        "mod": "mod.html",
        "mods": "mod.html",
        "fpsb": "fpsb-history.html",
        "fpsb x": "fpsb-x.html",
        "fpsbx": "fpsb-x.html",
        "fpsb-x": "fpsb-x.html",
        "fpsb 1": "fpsb-x/fpsb1.html",
        "fpsb 2": "fpsb-x/fpsb2.html",
        "fpsb 3": "fpsb-x/fpsb3.html",
        "fpsb 4": "fpsb-x/fpsb4.html",
        "fpsb 5": "fpsb-x/fpsb5.html",
        "fpsb 6": "fpsb-x/fpsb6.html",
        "fpsb 7": "fpsb-x/fpsb7.html",
        "fpsb 8": "fpsb-x/fpsb8.html",
        "fpsb 9": "fpsb-x/fpsb9.html",
        "fpsb 10": "fpsb-x/fpsb10.html",
        "fpsb 11": "fpsb-x/fpsb11.html",
        "fpsb 12": "fpsb-x/fpsb12.html",
        "spinner": "spinner.html",
        "modder": "spinner.html",
        "spinners": "spinner.html",
        "modders": "spinner.html",
        "history": "spinner.html",
        "board": "spinner.html",
        "boards": "spinner.html",
        "jojo": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjj5Mjm2OuEAxVaTKQEHTtKCl0QFnoECAcQAQ&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FJoJo%2527s_Bizarre_Adventure&usg=AOvVaw12kTJBI1rF9O_MdlhZ4yai&opi=89978449",
        "menu": "prsite.html",
        "contact": "contact.html",
        "collab": "collab.html",
        "part": "part.html",
        "mod": "mod.html",
        "tchus": "fpsb-spinner-modder/tchus.html",
        "banz": "fpsb-spinner-modder/banz.html",
        "kara": "fpsb-spinner-modder/ktj.html",
        "kara-t-j": "fpsb-spinner-modder/ktj.html",
        "kara t": "fpsb-spinner-modder/ktj.html",
        "kara t julien": "fpsb-spinner-modder/ktj.html",
        "gsk8": "fpsb-spinner-modder/gsk8.html",
        "gollumsk8": "fpsb-spinner-modder/gsk8.html",
        "gollum": "fpsb-spinner-modder/gsk8.html",
        "dust": "fpsb-spinner-modder/dust.html",
        "mejace": "fpsb-spinner-modder/mejace.html",
        "megace": "fpsb-spinner-modder/mejace.html",
        "aayetowi": "fpsb-spinner-modder/papayetowi2.html",
        "aayetowi 2": "fpsb-spinner-modder/papayetowi2.html",
        "aayetowi2": "fpsb-spinner-modder/papayetowi2.html",
        "papayetowi": "fpsb-spinner-modder/papayetowi2.html",
        "radek": "fpsb-spinner-modder/radek.html",
        "som": "fpsb-spinner-modder/som.html",
        "a13x": "fpsb-spinner-modder/a13x.html",
        "somtchaÏ": "fpsb-spinner-modder/som.html",
        "tache": "fpsb-spinner-modder/tache.html",
        "walburne": "fpsb-spinner-modder/walbur.html",
        "walbur": "fpsb-spinner-modder/walbur.html",
        "wanadoo": "fpsb-spinner-modder/wanadoo.html",
        "french": "fpsb-history.html",
        "fpsb hope": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb-hope": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "french hope": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 1": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope1": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 1": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 1st": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 1st": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 2": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope2": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 2": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 2nd": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 2nd": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 3": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope3": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 3": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 3rd": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 3rd": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 4": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope4": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 4": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 4th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 4th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 5": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope5": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 5": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 5th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 5th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 6": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope6": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope -": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 6th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 6th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 7": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope7": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 7": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 7th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 7th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 8": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope8": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 8": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 8th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 8th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 9": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope9": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 9": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 9th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 9th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 10": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope10": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 10": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 10th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 10th": "fpsb-collab/Fpsb-hope/Fpsb-hope.html",
    };
    

    

    if (redirections[a]) {
        window.location.href = redirections[a];
    } else if(!redirections[a]){
        window.location.href = "ereur.html?value="+a;
    }
} 
function CHERCHER() {
    var a = document.getElementById("search-bar").value.trim().toLowerCase();
   
    var redirections = {
        "jeb": "../jeb.html",
        "japen": "../japen.html",
        "japen 1": "../japen/japen1.html",
        "japen 2": "../japen/japen2.html",
        "japen 3": "../japen/japen3.html",
        "japen 4": "../japen/japen4.html",
        "japen 5": "../japen/japen5.html",
        "japen 6": "../japen/japen6.html",
        "japen 7": "../japen/japen7.html",
        "japen 8": "../japen/japen8.html",
        "japen 9": "../japen/japen9.html",
        "japen 10": "../japen/japen10.html",
        "japen 11": "../japen/japen11.html",
        "japen 12": "../japen/japen12.html",
        "japen 13": "../japen/japen13.html",
        "japen 14": "../japen/japen14.html",
        "japen 15": "../japen/japen15.html",
        "japen 16": "../japen/japen16.html",
        "japen 17": "../japen/japen17.html",
        "japen 18": "../japen/japen18.html",
        "japen 19": "../japen/japen19.html",
        "vortex": "../vortex.html",
        "contact": "../contact.html",
        "collab": "../collab.html",
        "part": "../part.html",
        "parts": "../part.html", 
        "mod": "../mod.html",
        "mods": "../mod.html",
        "fpsb": "../fpsb-history.html",
        "fpsb x": "../fpsb-x.html",
        "fpsbx": "../fpsb-x.html",
        "fpsb-x": "../fpsb-x.html",
        "fpsb 1": "../fpsb-x/fpsb1.html",
        "fpsb 2": "../fpsb-x/fpsb2.html",
        "fpsb 3": "../fpsb-x/fpsb3.html",
        "fpsb 4": "../fpsb-x/fpsb4.html",
        "fpsb 5": "../fpsb-x/fpsb5.html",
        "fpsb 6": "../fpsb-x/fpsb6.html",
        "fpsb 7": "../fpsb-x/fpsb7.html",
        "fpsb 8": "../fpsb-x/fpsb8.html",
        "fpsb 9": "../fpsb-x/fpsb9.html",
        "fpsb 10": "../fpsb-x/fpsb10.html",
        "fpsb 11": "../fpsb-x/fpsb11.html",
        "fpsb 12": "../fpsb-x/fpsb12.html",
        "spinner": "../spinner.html",
        "modder": "../spinner.html",
        "spinners": "../spinner.html",
        "modders": "../spinner.html",
        "history": "../spinner.html",
        "board": "../spinner.html",
        "boards": "../spinner.html",
        "jojo": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjj5Mjm2OuEAxVaTKQEHTtKCl0QFnoECAcQAQ&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FJoJo%2527s_Bizarre_Adventure&usg=AOvVaw12kTJBI1rF9O_MdlhZ4yai&opi=89978449",
        "menu": "../prsite.html",
        "contact": "../contact.html",
        "collab": "../collab.html",
        "part": "../part.html",
        "mod": "../mod.html",
        "tchus": "../fpsb-spinner-modder/tchus.html",
        "banz": "../fpsb-spinner-modder/banz.html",
        "kara": "../fpsb-spinner-modder/ktj.html",
        "kara-t-j": "../fpsb-spinner-modder/ktj.html",
        "kara t": "../fpsb-spinner-modder/ktj.html",
        "kara t julien": "../fpsb-spinner-modder/ktj.html",
        "gsk8": "../fpsb-spinner-modder/gsk8.html",
        "gollumsk8": "../fpsb-spinner-modder/gsk8.html",
        "gollum": "../fpsb-spinner-modder/gsk8.html",
        "dust": "../fpsb-spinner-modder/dust.html",
        "mejace": "../fpsb-spinner-modder/mejace.html",
        "megace": "../fpsb-spinner-modder/mejace.html",
        "aayetowi": "../fpsb-spinner-modder/papayetowi2.html",
        "aayetowi 2": "../fpsb-spinner-modder/papayetowi2.html",
        "aayetowi2": "../fpsb-spinner-modder/papayetowi2.html",
        "papayetowi": "../fpsb-spinner-modder/papayetowi2.html",
        "radek": "../fpsb-spinner-modder/radek.html",
        "som": "../fpsb-spinner-modder/som.html",
        "a13x": "../fpsb-spinner-modder/a13x.html",
        "somtchaÏ": "../fpsb-spinner-modder/som.html",
        "tache": "../fpsb-spinner-modder/tache.html",
        "walburne": "../fpsb-spinner-modder/walbur.html",
        "walbur": "../fpsb-spinner-modder/walbur.html",
        "wanadoo": "../fpsb-spinner-modder/wanadoo.html",
        "french": "../fpsb-history.html",
        "fpsb hope": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb-hope": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "french hope": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 1": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope1": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 1": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 1st": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 1st": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 2": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope2": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 2": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 2nd": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 2nd": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 3": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope3": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 3": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 3rd": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 3rd": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 4": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope4": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 4": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 4th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 4th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 5": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope5": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 5": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 5th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 5th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 6": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope6": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope -": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 6th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 6th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 7": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope7": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 7": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 7th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 7th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 8": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope8": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 8": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 8th": "../.fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 8th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 9": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope9": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 9": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 9th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 9th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 10": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope10": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 10": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope 10th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 10th": "../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
    };
    

    

    if (redirections[a]) {
        window.location.href = redirections[a];
    } else if(!redirections[a]){
        window.location.href = "../ereur.html?value="+a;
    }
}       

function handleDiscordClick() {
    alert('You can contact me with my discord "walbur" or on a penspinning serveur like the FPSB !');
}

function home() {
    window.location.href = "prsite.html";
}

function japen() {
    window.location.href = "japen.html"
}

function fpsb_x() {
    window.location.href = "fpsb-x.html"
}

function collab() {
    window.location.href = "collab.html"
}

function contact() {
    window.location.href = "contact.html"
}

function Part() {
    window.location.href = "part.html";
}

function mod() {
    window.location.href = "mod.html"
}

function HOME() {
    window.location.href = "../prsite.html";
}

function COLLAB() {
    window.location.href = "../collab.html"
}

function CONTACT() {
    window.location.href = "../contact.html"
}

function PART() {
    window.location.href = "../part.html";
}

function MOD() {
    window.location.href = "../mod.html"
}

function jeb_board() {
    window.alert("You can talk with jeb on Twitter in wich they are really present . ")
}


// For doss

function DCHERCHER() {
    var a = document.getElementById("search-bar").value.trim().toLowerCase();
   
    var redirections = {
        "jeb": "../../jeb.html",
        "japen": "../../japen.html",
        "japen 1": "../../japen/japen1.html",
        "japen 2": "../../japen/japen2.html",
        "japen 3": "../../japen/japen3.html",
        "japen 4": "../../japen/japen4.html",
        "japen 5": "../../japen/japen5.html",
        "japen 6": "../../japen/japen6.html",
        "japen 7": "../../japen/japen7.html",
        "japen 8": "../../japen/japen8.html",
        "japen 9": "../../japen/japen9.html",
        "japen 10": "../../japen/japen10.html",
        "japen 11": "../../japen/japen11.html",
        "japen 12": "../../japen/japen12.html",
        "japen 13": "..../japen/japen13.html",
        "japen 14": "../../japen/japen14.html",
        "japen 15": "../../japen/japen15.html",
        "japen 16": "../../japen/japen16.html",
        "japen 17": "../../japen/japen17.html",
        "japen 18": "../../japen/japen18.html",
        "japen 19": "../../japen/japen19.html",
        "vortex": "../../vortex.html",
        "contact": "../../contact.html",
        "collab": "../../collab.html",
        "part": "../../part.html",
        "parts": "../../part.html", 
        "mod": "../../mod.html",
        "mods": "../../mod.html",
        "fpsb": "../../fpsb-history.html",
        "fpsb x": "../../fpsb-x.html",
        "fpsbx": "../../fpsb-x.html",
        "fpsb-x": "../../fpsb-x.html",
        "fpsb 1": "../../fpsb-x/fpsb1.html",
        "fpsb 2": "../../fpsb-x/fpsb2.html",
        "fpsb 3": "../../fpsb-x/fpsb3.html",
        "fpsb 4": "../../fpsb-x/fpsb4.html",
        "fpsb 5": "../../fpsb-x/fpsb5.html",
        "fpsb 6": "../../fpsb-x/fpsb6.html",
        "fpsb 7": "../../fpsb-x/fpsb7.html",
        "fpsb 8": "../../fpsb-x/fpsb8.html",
        "fpsb 9": "../../fpsb-x/fpsb9.html",
        "fpsb 10": "../../fpsb-x/fpsb10.html",
        "fpsb 11": "../../fpsb-x/fpsb11.html",
        "fpsb 12": "../../fpsb-x/fpsb12.html",
        "spinner": "../.../spinner.html",
        "modder": "../../spinner.html",
        "spinners": "../../spinner.html",
        "modders": "../../spinner.html",
        "history": "../../spinner.html",
        "board": "../../spinner.html",
        "boards": "../../spinner.html",
        "jojo": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjj5Mjm2OuEAxVaTKQEHTtKCl0QFnoECAcQAQ&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FJoJo%2527s_Bizarre_Adventure&usg=AOvVaw12kTJBI1rF9O_MdlhZ4yai&opi=89978449",
        "menu": "../../prsite.html",
        "contact": "../../contact.html",
        "collab": "../../collab.html",
        "part": "../../part.html",
        "mod": "../../mod.html",
        "tchus": "../../fpsb-spinner-modder/tchus.html",
        "banz": "../../fpsb-spinner-modder/banz.html",
        "kara": "../../fpsb-spinner-modder/ktj.html",
        "kara-t-j": "../../fpsb-spinner-modder/ktj.html",
        "kara t": "../../fpsb-spinner-modder/ktj.html",
        "kara t julien": "../../fpsb-spinner-modder/ktj.html",
        "gsk8": "../../fpsb-spinner-modder/gsk8.html",
        "gollumsk8": "../../fpsb-spinner-modder/gsk8.html",
        "gollum": "../../fpsb-spinner-modder/gsk8.html",
        "dust": "../../fpsb-spinner-modder/dust.html",
        "mejace": "../../fpsb-spinner-modder/mejace.html",
        "megace": "../../fpsb-spinner-modder/mejace.html",
        "aayetowi": "../../fpsb-spinner-modder/papayetowi2.html",
        "aayetowi 2": "../../fpsb-spinner-modder/papayetowi2.html",
        "aayetowi2": "../../fpsb-spinner-modder/papayetowi2.html",
        "papayetowi": "../../fpsb-spinner-modder/papayetowi2.html",
        "radek": "../../fpsb-spinner-modder/radek.html",
        "som": "../../fpsb-spinner-modder/som.html",
        "somtchaÏ": "../../fpsb-spinner-modder/som.html",
        "tache": "../../fpsb-spinner-modder/tache.html",
        "walburne": "../../fpsb-spinner-modder/walbur.html",
        "walbur": "../../fpsb-spinner-modder/walbur.html",
        "wanadoo": "..././fpsb-spinner-modder/wanadoo.html",
        "french": "../../fpsb-history.html",
        "fpsb hope": "../../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb-hope": "../../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "hope": "../../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "french hope": "../../fpsb-collab/Fpsb-hope/Fpsb-hope.html",
        "fpsb hope 1": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-1.html",
        "fpsb hope1": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-1.html",
        "hope 1": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-1.html",
        "hope 1st": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-1.html",
        "fpsb hope 1st": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-1.html",
        "fpsb hope 2": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-2.html",
        "fpsb hope2": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-2.html",
        "hope 2": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-2.html",
        "hope 2nd": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-2.html",
        "fpsb hope 2nd": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-2.html",
        "fpsb hope 3": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-3.html",
        "fpsb hope3": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-3.html",
        "hope 3": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-3.html",
        "hope 3rd": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-3.html",
        "fpsb hope 3rd": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-3.html",
        "fpsb hope 4": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-4.html",
        "fpsb hope4": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-4.html",
        "hope 4": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-4.html",
        "hope 4th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-4.html",
        "fpsb hope 4th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-4.html",
        "fpsb hope 5": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-5.html",
        "fpsb hope5": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-5.html",
        "hope 5": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-5.html",
        "hope 5th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-5.html",
        "fpsb hope 5th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-5.html",
        "fpsb hope 6": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-6.html",
        "fpsb hope6": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-6.html",
        "hope -": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-6.html",
        "hope 6th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-6.html",
        "fpsb hope 6th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-6.html",
        "fpsb hope 7": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-7.html",
        "fpsb hope7": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-7.html",
        "hope 7": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-7.html",
        "hope 7th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-7.html",
        "fpsb hope 7th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-7.html",
        "fpsb hope 8": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-8.html",
        "fpsb hope8": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-8.html",
        "hope 8": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-8.html",
        "hope 8th": "../../.fpsb-collab/Fpsb-hope/Fpsb-hope-8.html",
        "fpsb hope 8th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-8.html",
        "fpsb hope 9": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-9.html",
        "fpsb hope9": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-9.html",
        "hope 9": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-9.html",
        "hope 9th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-9.html",
        "fpsb hope 9th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-9.html",
        "fpsb hope 10": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-10.html",
        "fpsb hope10": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-10.html",
        "hope 10": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-10.html",
        "hope 10th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-10.html",
        "fpsb hope 10th": "../../fpsb-collab/Fpsb-hope/Fpsb-hope-10.html",
    };
    

    

    if (redirections[a]) {
        window.location.href = redirections[a];
    } else if(!redirections[a]){
        window.location.href = "../ereur.html?value="+a;
    }
} 

function DHOME() {
    window.location.href = "../../prsite.html";
}

function DCOLLAB() {
    window.location.href = "../../collab.html"
}

function DCONTACT() {
    window.location.href = "../../contact.html"
}

function DPART() {
    window.location.href = "../../part.html";
}

function DMOD() {
    window.location.href = "../../mod.html"
}

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