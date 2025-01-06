$(document).ready(function (){
  
  //  shrink navbar on scroll
  $(window).scroll(function(){
    var wscroll = $(this).scrollTop();
    if(wscroll > 50){
      $('.page_nav').addClass('shrink-nav');
      $(".navbar_main").addClass("shrink-nav");
      $(".navbar_main").find(".white_logo").addClass("d-none");
      $(".navbar_main").find(".blue_logo").removeClass("d-none").css("width", "5rem");
    }
    else{
      $('.page_nav').removeClass('shrink-nav');
      $(".navbar_main").removeClass("shrink-nav");
      $(".navbar_main").find(".white_logo").removeClass("d-none");
      $(".navbar_main").find(".blue_logo").addClass("d-none");
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