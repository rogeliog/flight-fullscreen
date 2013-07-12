define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(fullscreen);

  /**
   * Module function
   */

  function fullscreen() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {

    });
  }

});
