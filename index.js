var GAP = 10;
// [TODO]: DRY
var scrollToTop = function (scrollDuration) {
  var scrollHeight = window.pageYOffset;
  var scrollStep = Math.PI / ( scrollDuration / 15 );
  var cosParameter = scrollHeight / 2;
  var scrollCount = 0;
  var scrollMargin;
  var scrollPosition;

  var scrollInterval = setInterval(function () {
    if (window.pageYOffset != 0) {
      scrollCount = scrollCount + 1;
      scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);

      if (scrollHeight - scrollMargin > scrollPosition) {
        clearInterval(scrollInterval);
        scrollToTop(scrollDuration / scrollCount);
      }

      scrollPosition = scrollHeight - scrollMargin;

      window.scrollTo(0, ( scrollPosition ));
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
};

var scrollToElement = function(element, interval) {
  var offset = getElementOffset(element);
  var initialOffset = window.pageYOffset;

  var scrollHeight = offset - initialOffset;

  var scrollStep = Math.PI / ( interval / 15 );
  var cosParameter = scrollHeight / 2;
  var scrollCount = 0;
  var scrollMargin;

  var scrollInterval = setInterval(function () {
    // Elelement we want to scroll to below current scroll position
    if ((window.pageYOffset < offset - GAP || window.pageYOffset > offset) && (document.documentElement.scrollHeight !== window.pageYOffset + window.innerHeight)) {
      scrollCount = scrollCount + 1;
      scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
      window.scrollTo(0, initialOffset + scrollMargin);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
};

var getElementOffset = function(element) {
  return window.pageYOffset + element.getBoundingClientRect().top;
}

module.exports = {
  scrollToTop: scrollToTop,
  scrollTo: scrollToElement
}
