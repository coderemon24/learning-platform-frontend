$(document).ready(function (){
  
  //  shrink navbar on scroll
  $(window).scroll(function(){
    var wscroll = $(this).scrollTop();
    if(wscroll > 50){
    $(".navbar").addClass("shrink-nav");
    }
    else{
      $(".navbar").removeClass("shrink-nav");
    }
  });

  //  mixitup 
  let mixer = mixitup('.box_list', {
  selectors: {
      target: '.mix',
      control: '.box_control'
  },
  animation: {
      duration: 300
  }
  });

  // Set default active control dynamically
  $('.box_control').removeClass('mixitup-control-active'); // Remove active from all
  $('[data-filter="*"]').addClass('mixitup-control-active'); // Add active to default
  
  
});