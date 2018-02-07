(function(){
    
    $( document ).ready(function() {
    //scroll to anchor
        $('a[href^="#"]').on('click', function(event) {
            const target = $(this.getAttribute('href'));
            if( target.length ) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - $('.navbar-header').outerHeight()
                }, 1000);
            }
        });

        //hide navbar-toggle on click
        $(function() 
            { $('nav a').on('click', function(){ 
                if($('.navbar-toggle').css('display') !='none'){ 
                    $(".navbar-toggle").trigger( "click" ); 
                }
            }); 
        });

        //on scroll show button
        const upBtn = $('#up');

        upBtn.click(showUpBtn);
        $( window ).scroll(showUpBtn);

        function showUpBtn(){
            const scroll = $(window).scrollTop();
            if (scroll >= 0 && scroll < 200){
                upBtn.css('display', 'none');
            } else {
                upBtn.css('display', 'block');
            }
        }

        //add margin behind fixed nav
        const navHeight = $('#head').outerHeight();
        $('body').css('margin-top', navHeight + 'px');
    });

    //run AOS
    AOS.init({
        disable:  window.innerWidth < 1024,
        duration: 600,
    });

})();