/**
 * Created by visa on 02/12/15.
 */
(function(document) {
  'use strict';

  // TODO move into another file
  app.cnf = {
    "client_id": "strapieno-admin",
    "base-url-rest" : "http://127.0.0.69/rest",
    "base-url" : "http://127.0.0.69",
    "google-map-api-key": "AIzaSyAqDcu1vu9rj_Fj-3qCxFKbwdozZFGZOOE"
  };

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
    if (rightMenu) {
     rightMenu.addEventListener('logout', function (e) {
         var auth = document.querySelector('apigility-auth-service');
         auth.logout();
       });
     } else {
       console.warn('strapieno-right-menu not found');
     }

  };

  var tt = document.querySelector('#addUserPage strapieno-right-menu');

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

})(document);
