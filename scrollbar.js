document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var documentHeight = document.documentElement.scrollHeight - window.innerHeight;

        var zeroFraction = 0.1; 
        var firstFraction = 0.2; 
        var secondFraction = 0.4; 
        var thirdFraction = 0.6; 
        var fourthFraction = 0.8; 
        
        var zerov = documentHeight * zeroFraction;
        var firstv = documentHeight * firstFraction;
        var secondv = documentHeight * secondFraction;
        var thirdv = documentHeight * thirdFraction;
        var fourthv = documentHeight * fourthFraction;

        document.documentElement.classList.remove('scrollbar-first', 'scrollbar-second', 'scrollbar-third', 'scrollbar-fourth');

        if (scrollTop >= fourthv) {
            document.documentElement.classList.add('scrollbar-fourth');
        } else if (scrollTop >= thirdv) {
            document.documentElement.classList.add('scrollbar-third');
        } else if (scrollTop >= secondv) {
            document.documentElement.classList.add('scrollbar-second');
        } else if (scrollTop >= firstv) {
            document.documentElement.classList.add('scrollbar-first');
        }else if (scrollTop >= zerov) {
            document.documentElement.classList.add('scrollbar-zero');
        }
    });
});