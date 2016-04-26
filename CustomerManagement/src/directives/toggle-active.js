angular.module('custManagement').directive('toggleActive', function () {
  var ACTIVE_CLASS = 'is-active';

  function clearActiveClass(nodeList) {
    nodeList = Array.prototype.slice.call(nodeList);
    nodeList.forEach(function (el) {
      el.classList.remove(ACTIVE_CLASS);
    });
  }

  function clickHandler(ev) {
    var anchors = this.querySelectorAll('a');
    clearActiveClass(anchors);
    ev.target.classList.add(ACTIVE_CLASS);
  }

  return function ($scope, $element, $attrs) {
    $element.on('click', clickHandler);
  };
});
