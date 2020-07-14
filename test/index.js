function initComparisons() {
  var x, i;
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h, j;
    w = img.offsetWidth;
    h = img.offsetHeight;

    slider = img.parentElement.getElementsByClassName('range-finder');


    slider[0].addEventListener("mousedown", slideReady);
    slider[0].addEventListener("mouseup", slideFinish);
    slider[0].addEventListener("touchstart", slideReady);
    slider[0].addEventListener("touchend", slideFinish);

    img.style.width = "50%";

    function slideReady(e) {
      // e.preventDefault();
      clicked = 1;
      e.target.addEventListener("mousemove", slideMove);
      e.target.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      if (clicked == 0) return false;
      pos = e.target.value;
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }
    function slide(x) {
      img.style.width = (x == 1 ? 0 : x) + "%";
    }
  }
}

initComparisons();
