

(function( jQuery ){
  var $module = jQuery('#m-1656792174668').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656792176116').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    window.__gfAnimate.registerClick(jQuery("#m-1656792176116"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"flash","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-click","type":"level2"}}');
    
    
    
    
    
    
    
    
    (function( jQuery ){





$(document).ready(function() {
    $('.bundle2').click(function() {
$.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: {id:42154381410499,quantity:1},
                success: function(){
                    location.href="/cart";
                }
            });
    });
    
       $('.bundle3').click(function() {
$.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: {id:42154381476035,quantity:1},
                success: function(){
                    location.href="/cart";
                }
            });
    });
});





})( window.GemQuery || jQuery );
    
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1656792177405').children('.module');
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
  var $module = jQuery('#m-1656792177105').children('.module');
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
    var $module = jQuery('#m-1656792176735').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
    
    
  
    
  
    
    
    
  
    
    (function( jQuery ){
  // var $module = jQuery('#m-1656831481979').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1656912668955').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  // var $module = jQuery('#m-1656795025356').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
(function( jQuery ){
  // var $module = jQuery('#m-1656912474263').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656870742297').children('.module');
  $module.gfV3Product();
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
                      window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#r-1677617741797"},"events":[{"key":"scrolling-to-percentage","data":{"condition":"lt","percentage":"30","runtime":"infinite"}}],"targets":[{"id":"#r-1677617741797","actions":[{"key":"hide","type":2,"data":{"delay":0,"duration":"50"}}]}]},{"source":{"id":"#r-1677617741797"},"events":[{"key":"scrolling-to-percentage","data":{"condition":"gte","percentage":"30","runtime":"infinite"}}],"targets":[{"id":"#r-1677617741797","actions":[{"key":"show","type":2,"data":{"delay":0,"duration":"50"}}]}]}]); window.__gfV1FlowActions.init();