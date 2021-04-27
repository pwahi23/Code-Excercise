/**
 * https://www.dell.com/en-us/dfh/shop/dell-refurbished/cp/outlet-dfh?~ck=mn
 */

const bonusExercise = function() {

  let flexSliderCount = $('.flex-viewport > ul').find('li.slide').length;
  console.log(flexSliderCount)
  if(flexSliderCount > 2) {
    let flexslider = $('.banner-carousel-webpart.flexslider').data('flexslider');
    flexslider.vars.slideshow = false;
    flexslider.stop();
  }
}
bonusExercise();