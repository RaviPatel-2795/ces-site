$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn'),
          targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();
      
      $('.acc-content').stop().animate({ height: 0 }, animTime);
      $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);
		
		
      setTimeout(function(){ clickPolice = false; }, animTime);
    }
	else {
		$('.acc-content').stop().animate({ height: 0 }, animTime);
	}
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn1', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn1'),
          targetHeight = $('.acc-content-inner1').eq(currIndex).outerHeight();
      
      $('.acc-content1').stop().animate({ height: 0 }, animTime);
      $('.acc-content1').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn2', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn2'),
          targetHeight = $('.acc-content-inner2').eq(currIndex).outerHeight();
      
      $('.acc-content2').stop().animate({ height: 0 }, animTime);
      $('.acc-content2').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn3', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn3'),
          targetHeight = $('.acc-content-inner3').eq(currIndex).outerHeight();
      
      $('.acc-content3').stop().animate({ height: 0 }, animTime);
      $('.acc-content3').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn4', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn4'),
          targetHeight = $('.acc-content-inner4').eq(currIndex).outerHeight();
      
      $('.acc-content4').stop().animate({ height: 0 }, animTime);
      $('.acc-content4').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn5', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn5'),
          targetHeight = $('.acc-content-inner5').eq(currIndex).outerHeight();
      
      $('.acc-content5').stop().animate({ height: 0 }, animTime);
      $('.acc-content5').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn6', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn6'),
          targetHeight = $('.acc-content-inner6').eq(currIndex).outerHeight();
      
      $('.acc-content6').stop().animate({ height: 0 }, animTime);
      $('.acc-content6').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn7', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn7'),
          targetHeight = $('.acc-content-inner7').eq(currIndex).outerHeight();
      
      $('.acc-content7').stop().animate({ height: 0 }, animTime);
      $('.acc-content7').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn8', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn8'),
          targetHeight = $('.acc-content-inner8').eq(currIndex).outerHeight();
      
      $('.acc-content8').stop().animate({ height: 0 }, animTime);
      $('.acc-content8').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn9', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn9'),
          targetHeight = $('.acc-content-inner9').eq(currIndex).outerHeight();
      
      $('.acc-content9').stop().animate({ height: 0 }, animTime);
      $('.acc-content9').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn10', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn10'),
          targetHeight = $('.acc-content-inner10').eq(currIndex).outerHeight();
      
      $('.acc-content10').stop().animate({ height: 0 }, animTime);
      $('.acc-content10').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn11', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn11'),
          targetHeight = $('.acc-content-inner11').eq(currIndex).outerHeight();
      
      $('.acc-content11').stop().animate({ height: 0 }, animTime);
      $('.acc-content11').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn12', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn12'),
          targetHeight = $('.acc-content-inner12').eq(currIndex).outerHeight();
      
      $('.acc-content12').stop().animate({ height: 0 }, animTime);
      $('.acc-content12').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn13', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn13'),
          targetHeight = $('.acc-content-inner13').eq(currIndex).outerHeight();
      
      $('.acc-content13').stop().animate({ height: 0 }, animTime);
      $('.acc-content13').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn14', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn14'),
          targetHeight = $('.acc-content-inner14').eq(currIndex).outerHeight();
      
      $('.acc-content14').stop().animate({ height: 0 }, animTime);
      $('.acc-content14').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn15', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn15'),
          targetHeight = $('.acc-content-inner15').eq(currIndex).outerHeight();
      
      $('.acc-content15').stop().animate({ height: 0 }, animTime);
      $('.acc-content15').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn16', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn16'),
          targetHeight = $('.acc-content-inner16').eq(currIndex).outerHeight();
      
      $('.acc-content16').stop().animate({ height: 0 }, animTime);
      $('.acc-content16').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
	
	  $('.acc-container').stop().animate({ height: 0 }, animTime);
  $(document).on('touchstart click', '.acc-title', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-title'),
          targetHeight = $('.acc-container-inner').eq(currIndex).outerHeight();
      
      $('.acc-container').stop().animate({ height: 0 }, animTime);
      $('.acc-container').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});


// DEALER DOWNLOADS TESTING

function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}