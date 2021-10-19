
    $(document).ready(function(){
        setTimeout(function(){
            $('.cosmetic').slick({
                arrows:true,
                dots: true,
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 4,
                autoplay:false,
                autoplaySpeed:2000,
                fade: true,
                cssEase:'linear' 
            });
        },2000)
        
    });


