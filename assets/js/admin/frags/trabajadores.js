var app = angular.module('myapp');

app.controller('trabajadoresCtrl', function($scope, $rootScope, alertas, $http, mdDialog, $mdDialog, Trabajadores) {


	Trabajadores.obtener().then(res => {
		$scope.trabajadores = res.data;
		$scope.$digest();
	})

	$scope.eliminarTrabajador = function(trabajador, $index) {
		console.log($index);
		ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminarlo?').textContent('Para eliminar de forma permanente dale en aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);

		$mdDialog.show(ventana).then(function() {

			Trabajadores.eliminar(trabajador.id).then(function(res) {
				$scope.trabajadores.splice($index, 1)
				alertas.mostrarToastEstandar("Trabajador eliminiado correctamente");
			})

		}, function() {});
	}


	$scope.crearTrabajador = () => {

			$mdDialog.show({
			templateUrl: '/dialogs/trabajador',
			parent: angular.element(document.body),
			bindToController: true,
			preserveScope: true,
			clickOutsideToClose: true,
			fullscreen: $scope.customFullscreen,
			controller: function($scope, $mdDialog, alertas, $state, Trabajadores) {
				$scope.submit = function(trabajador) {
					console.log(trabajador);
					Trabajadores.crear(trabajador).then(res => {
						$mdDialog.hide();
						$state.go('administrador.trabajador',  {id : res.data.id})
					})

					alertas.mostrarToastEstandar("Trabajador agregado exitosamente");
					
				}
				$scope.close = function() {
					$mdDialog.hide(false);
				}
			}
		})
	}

	
});
