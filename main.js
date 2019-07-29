(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-flight-plan="form"]';
  var WAYPOINT_SELECTOR = '[data-way-point="way-points"]';
  var SERVER_URL = '';
  var App = window.App;
  var FormHandler = App.FormHandler;
  var WayPointList = App.WayPointList;
  var Validation = App.Validation;
  var wayPointList = new WayPointList(WAYPOINT_SELECTOR);
  var formHandler = new FormHandler(FORM_SELECTOR);

  wayPointList.addClickHandler();

  formHandler.addSubmitHandler(function (data) {
    wayPointList.addRow();
  });

  console.log(formHandler);
})(window);
