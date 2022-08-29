var leftItem = document.getElementsByClassName("box-l"),
  rightItem = document.getElementsByClassName("box-r");

(function () {
  var throttle = function (type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function () {
  Array.prototype.forEach.call(leftItem, function (el) {
    // Do stuff here
    el.style.transform = "rotate(-" + window.pageYOffset + "deg)";
  });
  Array.prototype.forEach.call(rightItem, function (el) {
    // Do stuff here
    el.style.transform = "rotate(" + window.pageYOffset + "deg)";
  });

  //rightItem.style.transform = "rotate(" + window.pageYOffset + "deg)";
});
