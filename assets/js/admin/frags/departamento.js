var app = angular.module('myapp');

app.controller('departamentoCtrl', function($scope, $rootScope, $http, mdDialog, $stateParams, alertas, Departamentos) {
	var id = $stateParams.id

 	Departamentos.one(id).then(res => {
		$scope.departamento = res.data;
		$scope.$digest();
		console.log(res.data);
	})


});
