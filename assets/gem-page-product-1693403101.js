

(function( jQuery ){
  var $module = jQuery('#m-1678945549236').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1678945549181').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    window.__gfAnimate.registerClick(jQuery("#m-1678945549181"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"flash","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-click","type":"level2"}}');
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1693443994014').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    window.__gfAnimate.registerClick(jQuery("#m-1693443994014"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"flash","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-click","type":"level2"}}');
    
    
    
    
    
    
    
    
    
    
    (function( jQuery ){





$(document).ready(function() {
    $('.bundle2').click(function() {
$.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: {id:42154381410499,quantity:1},
                success: function(){;
                }
            });
    });
    
       $('.bundle3').click(function() {
$.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: {id:42154381476035,quantity:1},
                success: function(){;
                }
            });
    });
});





})( window.GemQuery || jQuery );
    
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1678945549081').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function(jQuery) {
  var $module = jQuery('#m-1678945549160').children('.module');
  $module.gfV4ProductImageList({
    onImageClicked: function(imageUrl, imageZoomUrl) {}
  });

  var style = $module.attr('data-style');
  switch(style) {
    case 'slider':
    var navspeed = $module.data('navspeed'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),

      marginlg = parseInt($module.data('mlg')),
      marginmd = parseInt($module.data('mmd')),
      marginsm = parseInt($module.data('msm')),
      marginxs = parseInt($module.data('mxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var loop = $module.data('loop'),
        autoRefresh = true;
    } else {
      var loop = 0,
        autoRefresh = false;
    }
    $module.find('.gf_product-images-list').children().each( function( index ) {
      jQuery(this).attr( 'data-position', index );
    });
    $module.find('.gf_product-images-list').owlCarousel({
      mouseDrag: false,
      navSpeed: navspeed,
      autoRefresh: autoRefresh,
      autoWidth: !1,
      loop: loop,
      responsiveClass:true,
      responsive:{
        0:{
          items:colxs,
          nav: navxs,
          dots:dotsxs,
          margin: marginxs
        },
        768:{
          items:colsm,
          nav: navsm,
          dots:dotssm,
          margin: marginsm
        },
        992:{
          items:colmd,
          nav: navmd,
          dots:dotsmd,
          margin: marginmd
        },
        1200:{
          items:collg,
          nav: navlg,
          dots:dotslg,
          margin: marginlg
        }
      },
      onInitialized: function(){
        $module.closest('.module-wrap[data-label="(P) Image List"]').addClass('gf-carousel-loaded');
      }
    }); 
    break;
  }
})(window.GemQuery || jQuery); 
    
    
  
(function(jQuery) {
    var $module = jQuery('#m-1678945549143').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  // var $module = jQuery('#m-1678945549185').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
    (function( jQuery ){
  // var $module = jQuery('#m-1678945549133').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1678945549163').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
    
  
    
  
    
  
    
    
    
    
  
    
  
    
  
    
  
    
  
    
  
    
    
  
    
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1693436698895').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693433256397').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693433845989').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693433847656').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693433849503').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  // var $module = jQuery('#m-1678945549152').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
(function( jQuery ){
  // var $module = jQuery('#m-1678945549115').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1693432392213').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (function( jQuery ){
document.addEventListener("DOMContentLoaded", function() {
 let lazyVideos = [...document.querySelectorAll("video.lazy")]

 if ("IntersectionObserver" in window) {
   let lazyVideoObserver = new IntersectionObserver(function(entries) {
     entries.forEach(function(video) {
       if (video.isIntersecting) {
         for (let source in video.target.children) {
           let videoSource = video.target.children[source];
           if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
             videoSource.src = videoSource.dataset.src;
           }
         }

         video.target.load();
         video.target.classList.remove("lazy");
         lazyVideoObserver.unobserve(video.target);
       }
     });
   });

   lazyVideos.forEach(function(lazyVideo) {
     lazyVideoObserver.observe(lazyVideo);
   });
 }
});
})( window.GemQuery || jQuery );
    (function( jQuery ){
  var $module = jQuery('#m-1683714780385').children('.module');
  $module.gfV1Popup();

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'dev') {
    var moduleId = "1683714780385";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1683714780385") {
      window.getPopup1683714780385 = function() {
        return $module.data('gfv1popup');
      }
    }
  }
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
    
    
    
    
    
  
                          (function( jQuery ){
                              try{
                                  if(jQuery().gfV2Lazyload){
                                      var $module = jQuery(window);
                                      $module.gfV2Lazyload({delay:125})
                                  }
                              }catch(err){
                                  console.error(err)
                              }
                          })( window.GemQuery || jQuery );
                      