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

const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')


document.addEventListener('scroll', function() {
    let value = window.scrollY
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'

})