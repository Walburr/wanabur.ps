var filterbox = document.getElementById('filter');
var filtermenu = document.getElementById('filter-menu-pos');

function adjustFontSize() {
    const screenWidth = window.innerWidth;
    const fontSize = screenWidth / 50;

    // Sélectionne l'élément avec une classe ou un id valide
    var filtertxtttl = document.querySelector('.filtertxtttl');
    if (filtertxtttl) {
        filtertxtttl.style.fontSize = fontSize + 'px';

        // Si la taille de la police est inférieure à 14px, cache l'élément
        if (fontSize < 14) {
            filtertxtttl.style.display = "none";
        } else {
            filtertxtttl.style.display = "block";
        }
    }
}

// Écouteurs d'événements
window.addEventListener("load", function () {
    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);
});

filterbox.addEventListener('click', function () {
    if (filtermenu.classList.contains('active')) {
        filtermenu.classList.remove('active');
        setTimeout(() => {
            filtermenu.style.display = 'none';
        }, 500); // Attendez que la transition soit terminée
    } else {
        filtermenu.style.display = 'flex';
        setTimeout(() => {
            filtermenu.classList.add('active');
        }, 10);
    }
});