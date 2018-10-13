var app = angular.module('myapp');

app.controller('asistenciasCtrl', function($scope, $rootScope, $http, mdDialog, Asistentes) {

    Asistentes.obtener()
    .then(response => $scope.asistentes = response.data)
    .then(()=> $scope.$digest())

});
