$(document).ready(function(){
  var anchor      = $(".anchor");    // elementos a los que se le dara click
  var content     = $("html, body"); // por donde se va a desplazar
  var delay       = 1000;            // tiempo del efecto

  anchor.on('click', function(e){
    e.preventDefault();

    var $this, selectorEle;
    $this   = $(this);

    selectorEle = $this.attr("href");

    if (selectorEle.length) {
      var $ele = $(selectorEle);

      content.animate({
        scrollTop: $ele.offset().top
      }, delay);
      return false;
    }
  });
});

$(document).ready(function () {

        // you want to enable the pointer events only on click;

        $('#map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#canvas').on('click', function () {
            $('#map_canvas').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $("#map_canvas").mouseleave(function () {
            $('#map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });
    });
