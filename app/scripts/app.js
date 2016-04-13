/**
 * Created by visa on 02/12/15.
 */
(function(document) {
  'use strict';

  app.toggleMenu = function() {

    var drawerPanel = document.getElementById('paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.togglePanel();
    } else {
      drawerPanel.classList.toggle('collapsed-menu');
    }
  };

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    //document.getElementById('mainContainer').scrollTop = 1;
  };

  // Import formatter
  if (Strapieno.Formatter) {

    Object.keys(Strapieno.Formatter).forEach(function(key) {
      this[key] = Strapieno.Formatter[key];
    }.bind(app));
  };
    app.testR = function (data) {
        var date = new Date(data);
        return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    };

})(document);
