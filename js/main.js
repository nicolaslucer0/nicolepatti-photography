$(document).ready(function(){
    $('.flex-image').on('click', function(){
        _this = $(this);
        $('.modal').show();
        $('.modal').find("img").attr("src", _this.attr("src"));
    });

      $('img').mousedown(function (e) {
        if(e.button == 2) { // right click
          return false; // do nothing!
        }
      });

      $("img").on("contextmenu",function(){
        return false;
     });

});