// $("html").niceScroll({
//       scrollspeed: 51,
//       mousescrollstep: 45,
//      });
//
//     $(function() {
//         $('a.page-scroll').bind('click', function(event) {
//             var $anchor = $(this);
//             $('html, body').stop().animate({
//                 scrollTop: $($anchor.attr('href')).offset().top
//             }, 1000);
//             event.preventDefault();
//         });
//     });
//
//


$("#card").flip({
  trigger: 'click',
  autoSize: false,
  forceHeight: '200px',
  forceWidth: '200px'
});

console.log($('#card'))
