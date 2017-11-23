
//scroll to anchor

$( document ).ready(function() {

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
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
var upBtn = $('#up');

upBtn.click(showUpBtn);
$( window ).scroll(showUpBtn);

function showUpBtn(){
    var scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll < 200){
        upBtn.css('display', 'none');
    } else {
        upBtn.css('display', 'block');
    }
}



var navHeight = $('#head').outerHeight();
$('body').css('margin-top', navHeight + 'px');
});

//run AOS
AOS.init({
    disable:  window.innerWidth < 1024,
    duration: 600,
});
/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded", function (){
    console.log('Yay');
});

document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
            v = document.getElementsByClassName("youtube-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}