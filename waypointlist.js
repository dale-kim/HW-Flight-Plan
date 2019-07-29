(function (window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function WayPointList(selector) {
    if (!selector) {
      throw new Error('no selector provided');
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  function Row(wayPoint) {
    var $div = $('<div></div>', {
      'data-way-point': 'checkbox',
      'class': 'checkbox'
    });

    var $label = $('<label></label>');

    var $checkbox = $('<input></input>', {
      type: 'checkbox',
      value: wayPoint.name
    });

    var description = wayPoint.long + ' ' + wayPoint.lat;

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  WayPointList.prototype.addRow = function(wayPoint) {
    var rowElement = new Row(wayPoint);

    this.$element.append(rowElement.$element);
  };

  WayPointList.prototype.removeRow = function(name){
    this.$element
    .find('[value="' + name + '"]')
    .closest('[data-way-point="checkbox"]')
    .remove();
  };

  WayPointList.prototype.addClickHandler = function(fn){
    this.$element.on('click', 'input', function(event){
      var name = event.target.value;
      this.removeRow(name);
      fn(name);
    }.bind(this));
  };

  App.WayPointList = WayPointList;
  window.App = App;
})(window);
