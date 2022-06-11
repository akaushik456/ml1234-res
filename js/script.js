$('.ml9313-image').slick({
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll:3,
    arrows: true, 
    dots: true,
    responsive: [
        {
            breakpoint: 480,
            settings : {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
            }
        }
    ]
});
$('.ml-card-photos-unordered-lists').slick({
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll:1,
    arrows: true, 
    dots: true,
    responsive: [
        {
            breakpoint: 480,
            settings : {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
            }
        }
    ]
});
$('.kirti-nagar-section-mlunordered').slick({
    infinite: false,
    slidesToShow: 1, 
    slidesToScroll:1,
    arrows: false, 
    dots: false,
    responsive: [
        {
            breakpoint: 480,
            settings : {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
            }
        }
    ] 
});


var menuBtn = document.querySelector('.menu-icon');
var menu = document.querySelector('.navbarlinks');
  menuBtn.addEventListener('click' , function (event){
      menu.classList.toggle('open');

  },false);