$(document).ready(function (){
  
  //  shrink navbar on scroll
  $(window).scroll(function(){
    var wscroll = $(this).scrollTop();
    if(wscroll > 50){
      $(".navbar").addClass("shrink-nav");
      $(".navbar").find(".white_logo").addClass("d-none");
      $(".navbar").find(".blue_logo").removeClass("d-none").css("width", "5rem");
    }
    else{
      $(".navbar").removeClass("shrink-nav");
      $(".navbar").find(".white_logo").removeClass("d-none");
      $(".navbar").find(".blue_logo").addClass("d-none");
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