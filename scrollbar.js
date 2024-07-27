document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var documentHeight = document.documentElement.scrollHeight - window.innerHeight;

        var zeroFraction = 0.1; 
        var zdotfFraction = 0.05; 
        var firstFraction = 0.2; 
        var secondFraction = 0.4; 
        var secdotthFraction = 0.5; 
        var thirdFraction = 0.6; 
        var fourthFraction = 0.8; 
        
        var zerov = documentHeight * zeroFraction;
        var zdotfv = documentHeight * zdotfFraction;
        var firstv = documentHeight * firstFraction;
        var secondv = documentHeight * secondFraction;
        var secdotthv = documentHeight * secdotthFraction;
        var thirdv = documentHeight * thirdFraction;
        var fourthv = documentHeight * fourthFraction;


        document.documentElement.classList.remove(
            'scrollbar-zero', 'scrollbar-zdotf', 'scrollbar-first',
            'scrollbar-second', 'scrollbar-sedotth', 'scrollbar-third',
            'scrollbar-fourth'
        );

        if (scrollTop >= fourthv) {
            console.log("pipi")
            document.documentElement.classList.add('scrollbar-fourth');
        } else if (scrollTop >= thirdv) {
            console.log("caca")
            document.documentElement.classList.add('scrollbar-third');
        } else if (scrollTop >= secdotthv) {
            document.documentElement.classList.add('scrollbar-sedotth');
        } else if (scrollTop >= secondv) {
            document.documentElement.classList.add('scrollbar-second');
        } else if (scrollTop >= firstv) {
            document.documentElement.classList.add('scrollbar-first');
        } else if (scrollTop >= zerov) {
            document.documentElement.classList.add('scrollbar-zero');
        } else if (scrollTop >= zdotfv) {
            document.documentElement.classList.add('scrollbar-zdotf');
        }
    });
});

