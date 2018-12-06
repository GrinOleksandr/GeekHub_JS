$(document).ready( function() {

    setInterval(function () {
        let activeImage = $("li.active");
        let activeImageIndex = $(activeImage).index();
        let nextImageIndex = activeImageIndex + 1;
        let nextImage = $("li").eq(nextImageIndex);

        $(activeImage).fadeOut("2500ms");
        $(activeImage).removeClass("active");

        if (nextImageIndex == $('.slider-item:last').index() + 1) {
            $("li").eq(0).fadeIn("2500ms");
            $("li").eq(0).addClass("active");
        }

        else {
            $(nextImage).fadeIn("2500ms");
            $(nextImage).addClass("active");
        }

    }, 3000);
})









