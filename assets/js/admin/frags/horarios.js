var app = angular.module('myapp');

app.controller('horariosCtrl', function($scope, $rootScope, $http, alertas, mdDialog, $mdDialog, Horarios, Turnos) {

	Horarios.obtener()
	.then(res => $rootScope.horarios = res.data)
	.then(() => $scope.$digest())

	Turnos.obtener()
	.then(res => $scope.turnos = res.data)
	.then(() => $scope.$digest())

	$scope.nuevoHorario = () =>{
		$mdDialog.show({
				templateUrl: '/dialogs/horario',
				parent: angular.element(document.body),
				bindToController: true,
				preserveScope: true,
				clickOutsideToClose: true,
				fullscreen: $scope.customFullscreen,
				controller: function($scope, $mdDialog, alertas, $state, Horarios) {
					$scope.submit = function(horario) {
						Horarios.crear(horario).then(res => {
							$mdDialog.hide();
							$rootScope.horarios.push(res.data)
							$scope.$digest();
						})

						alertas.mostrarToastEstandar("Horario agregado exitosamente");
						
					}
					$scope.close = function() {
						$mdDialog.hide(false);
					}
				}
			})
	}

});
