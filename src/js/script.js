// function to detect if an element is scrolled into view
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

// listen for scroll event
$(window).scroll(function () {
  // check if elements with certain class is scrolled into view
  elements = $('.animate'); // `animate` is the class that you want to add animation to
  let animationClass = 'animation' // `animation` is the class that basically animates in your example ZMAnimmation
  for (let element of elements) {

        if (isScrolledIntoView(element)) {
            // element is scrolled into view, add animation class
            element.classList.add(animationClass); 
        } else {
            element.classList.remove(animationClass);
        }
    }
});