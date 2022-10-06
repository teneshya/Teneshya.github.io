$(document).ready(function() {
  var currentSection = 0;
  $('#formmenu').hide();
  $('ul li a').click(function() {       
      
      $('ul li a').removeClass('aktif');
      $(this).addClass('aktif');
      
      var href = $(this).attr('href');
      $('#allisi>div').hide();
      
      $(href).show();
            
      if(currentSection == 0){
          $('#formmenu').slideToggle();
          currentSection = href;
      }else if(currentSection == href){
           $('#formmenu').slideToggle();
           currentSection = 0;    
      }else{
          currentSection = href;
      }
      return false;
  });
});