
var filterbox = document.getElementById('filter');
var filtermenu = document.getElementById('filter-menu-pos');
var optionfilter_as_de_ord = document.querySelector('.styled-select')
var option_value_asds = [ "option1" , "option2"]
var disabled_option = document.getElementById("disable_option")

function adjustFontSize() {
    const screenWidth = window.innerWidth;
    const fontSize = screenWidth / 50;

    var filtertxtttl = document.querySelector('.filtertxtttl');
    if (filtertxtttl) {
        filtertxtttl.style.fontSize = fontSize + 'px';

        if (fontSize < 14) {
            filtertxtttl.style.display = "none";
        } else {
            filtertxtttl.style.display = "block";
        }
    }
}

window.addEventListener("load", function () {
    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);


    filterbox.addEventListener('click', function () {
        if (filtermenu.classList.contains('active')) {
            filtermenu.classList.remove('active');
            setTimeout(() => {
                filtermenu.style.display = 'none';
            }, 500);
        } else {
            filtermenu.style.display = 'flex';
            setTimeout(() => {
                filtermenu.classList.add('active');
            }, 10);
        }
    });



    optionfilter_as_de_ord.addEventListener('change' , function () {

        

        switch(optionfilter_as_de_ord.value) {
            case "option1":
                disabled_option.style.display = "none"; optionfilter_as_de_ord.style.color = "#658C9C"
                optionfilter_as_de_ord.textcontent = option_value_asds.value
                break;
            case 'option2':
                disabled_option.style.display = "none"; optionfilter_as_de_ord.style.color = "#658C9C"
                optionfilter_as_de_ord.textcontent = option_value_asds.value 
                break;
            default :
                optionfilter_as_de_ord.textContent = "Choose an option"; optionfilter_as_de_ord.style.color = 'red'
        }
    })


    const stars = document.querySelectorAll('#star');

    stars.forEach((star, index) => {
        
      star.addEventListener('mouseenter', () => {
        
        resetStars();

        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('gold');
          stars[i].style.fill = 'gold'; 
        }
      });
    });

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('gold');
            star.style.fill = "none"
        });
    }


});

