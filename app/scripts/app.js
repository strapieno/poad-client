/**
 * Created by visa on 02/12/15.
 */
(function(document) {
  'use strict';

  /**
   * Slide left menu
   */
  app.toggleMenu = function() {

    var drawerPanel = document.getElementById('paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.togglePanel();
    } else {
      drawerPanel.classList.toggle('collapsed-menu');
    }
  };

  /**
   * Slide right menu
   */
  app.toggleRightMenu = function() {

    var drawerPanel = document.getElementById('rightPanel');
    drawerPanel.togglePanel();
  };

  /**
   * Logout user
   */
   app.logout = function() {
    var rightMenu = document.querySelector('strapieno-right-menu');
    rightMenu.addEventListener('logout', function (e) {
      var auth = document.querySelector('apigility-auth');
      auth.logout();
    });
  };

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    //document.getElementById('mainContainer').scrollTop = 1;
  };

  app.boot = function () {
    this.logout();
  };

  /**
   * Boot application
   */
  window.addEventListener(
    'WebComponentsReady',
    function() {
      app.boot();
    }
  );

  /*
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
  */
})(document);
