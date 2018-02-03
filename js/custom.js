
$(document).ready(function(){
  $('.rotated-square .square:first-of-type').hover(function(){
        $('#first').css("display", "block");
        }, function(){
        $('#first').css("display", "none");
    });
    // ######
    $('.rotated-square .square:nth-of-type(2)').hover(function(){
          $('#second').css("display", "block");
          }, function(){
          $('#second').css("display", "none");
      });
      // #######
      $('.rotated-square .square:nth-of-type(3)').hover(function(){
            $('#third').css("display", "block");
            }, function(){
            $('#third').css("display", "none");
        });
        // #####
        $('.rotated-square .square:last-of-type').hover(function(){
              $('#fourth').css("display", "block");
              }, function(){
              $('#fourth').css("display", "none");
          });
        // *******************************************//
        $('.rotated-square .square:first-of-type').hover(function(){
          $(this).css("transform" ,  "rotate(45deg)");
          $('.rotated-square .square:first-of-type .square-content').css("transform" ,"rotate(-45deg)");

        } );

});
