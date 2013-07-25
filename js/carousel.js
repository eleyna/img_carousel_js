var carousel = document.getElementById('carousel');
var next = document.getElementById('next');
var previous = document.getElementById('previous');

carousel.style.marginLeft = 0;

window.onload = function() {

  next.onmouseover = function(event){
    this.style.opacity = 0.5;
  };

  previous.onmouseover = function(event){
    this.style.opacity = 0.5;
  };

  next.onmouseout = function(event){
    this.style.opacity = 0.2;
  };

  previous.onmouseout = function(event){
    this.style.opacity = 0.2;
  };

  next.onclick = function(event) {
    var leftPosition = parseInt(carousel.style.marginLeft.replace("px",""), 10);
    if (leftPosition === -1224) {
      carousel.style.marginLeft = "0px";
    } else {
      leftPosition += -612;
      carousel.style.marginLeft = leftPosition  +"px";
    }
  };

  previous.onclick = function(event){
    var leftPosition = parseInt(carousel.style.marginLeft.replace("px",""), 10);
    if (leftPosition === 0) {
      carousel.style.marginLeft = "-1224px";
    } else {
      leftPosition += 612;
      carousel.style.marginLeft = leftPosition  +"px";
    }
  };
};