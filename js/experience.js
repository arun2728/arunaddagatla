$(document).ready(function() {
    var degrees = 0;
    $('.img_new').click(function rotateMe(e) {
      degrees += 360;
      //$('.img').addClass('rotated'); // for one time rotation
      $('.img_new').css({
  
        'transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-o-transform': 'rotate(' + degrees + 'deg)'
      });
    })
  });

  $(document).ready(function() {
    var degrees = 0;
    $('.img_new1').click(function rotateMe(e) {
      degrees += 360;
      //$('.img').addClass('rotated'); // for one time rotation
      $('.img_new1').css({
  
        'transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-o-transform': 'rotate(' + degrees + 'deg)'
      });
    })
  });
  $(document).ready(function() {
    var degrees = 0;
    $('.img_new2').click(function rotateMe(e) {
      degrees += 360;
      //$('.img').addClass('rotated'); // for one time rotation
      $('.img_new2').css({
  
        'transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-o-transform': 'rotate(' + degrees + 'deg)'
      });
    })
  });

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction1() {
  document.getElementById("myexp1").classList.toggle("show");
}
function myFunction2() {
  document.getElementById("myexp2").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("myexp3").classList.toggle("show");
}
