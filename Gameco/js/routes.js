angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('gamecoApp', {
    url: '/page1',
    templateUrl: 'templates/gamecoApp.html',
    controller: 'gamecoAppCtrl'
  })

  .state('maquinas', {
    url: '/page2',
    templateUrl: 'templates/maquinas.html',
    controller: 'maquinasCtrl'
  })

  .state('totalLocal', {
    url: '/page3',
    templateUrl: 'templates/totalLocal.html',
    controller: 'totalLocalCtrl'
  })

  .state('prestamos', {
    url: '/page6',
    templateUrl: 'templates/prestamos.html',
    controller: 'prestamosCtrl'
  })

  .state('avisos', {
    url: '/page4',
    templateUrl: 'templates/avisos.html',
    controller: 'avisosCtrl'
  })

  .state('gastos', {
    url: '/page7',
    templateUrl: 'templates/gastos.html',
    controller: 'gastosCtrl'
  })

  .state('recaudar', {
    url: '/page8',
    templateUrl: 'templates/recaudar.html',
    controller: 'recaudarCtrl'
  })

  .state('resumen', {
    url: '/page13',
    templateUrl: 'templates/resumen.html',
    controller: 'resumenCtrl'
  })

  .state('averias', {
    url: '/page12',
    templateUrl: 'templates/averias.html',
    controller: 'averiasCtrl'
  })

  .state('moverMaquina', {
    url: '/page9',
    templateUrl: 'templates/moverMaquina.html',
    controller: 'moverMaquinaCtrl'
  })

  .state('notas', {
    url: '/page14',
    templateUrl: 'templates/notas.html',
    controller: 'notasCtrl'
  })

  .state('proporcioneSusDatos', {
    url: '/page10',
    templateUrl: 'templates/proporcioneSusDatos.html',
    controller: 'proporcioneSusDatosCtrl'
  })

$urlRouterProvider.otherwise('/page10')

  

});