// var square = getElementsByClassName('dragElement');
// square.onmousedown = function(el) {
//    square.style.position = 'absolute';
//    moveAt(el);
//     document.body.appendChild(square);
//     square.style.zIndex = 1000;
//
//     function moveAt(el) {
//     square.style.left = e.pageX - square.offsetWidth / 2 + 'px';
//     square.style.top = e.pageY - square.offsetHeight / 2 + 'px';
//   }
//   document.onmousemove = function(el) {
//    moveAt(el);
//  }
//
//  square.onmouseup = function() {
//     document.onmousemove = null;
//     square.onmouseup = null;
//   }
// }
var ball = document.getElementById('ball');

ball.onmousedown = function(e) {

  var coords = getCoords(ball);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  ball.style.position = 'absolute';
  document.body.appendChild(ball);
  moveAt(e);

  ball.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    ball.style.left = e.pageX - shiftX + 'px';
    ball.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  ball.onmouseup = function() {
    document.onmousemove = null;
    ball.onmouseup = null;
  };

}

ball.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
