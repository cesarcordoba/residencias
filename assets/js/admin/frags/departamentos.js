var app = angular.module('myapp');

app.controller('departamentosCtrl', function($scope, $state, mdDialog, $mdDialog, alertas, $rootScope, $stateParams, $http, Departamentos) {

	var self = this;

	class Departamento_ {
    	constructor(){
    		this.paginas = null,
    		this.pagina = 1,
    		this.item = 5,
    		this.departamentos = []

    	}

    	obtener(){
			Departamentos.paginacion(this.item, this.pagina).then(res => {
				console.log(res.data)

				self.departamentos.departamentos = res.data.items.map(n => new Departamentito(n))

				$scope.$digest()
			})
    	}

    	anterior(){ 
    		this.pagina = this.pagina - 1;
    		this.obtener();
    	}
    	siguiente(){ 
    		this.pagina = this.pagina + 1;
    		this.obtener();
    	}

    	nuevo(){

    		$mdDialog.show({
				templateUrl: '/dialogs/departamento',
				parent: angular.element(document.body),
				bindToController: true,
				preserveScope: true,
				clickOutsideToClose: true,
				fullscreen: $scope.customFullscreen,
				controller: function($scope, $mdDialog, alertas, $state, Departamentos) {
					$scope.submit = function(departamento) {
						console.log(departamento);
						Departamentos.crear(departamento).then(res => {
							$mdDialog.hide();
							$state.go('administrador.departamento',  {id : res.data.id})
						})

						alertas.mostrarToastEstandar("Departamento agregado exitosamente");
						
					}
					$scope.close = function() {
						$mdDialog.hide(false);
					}
				}
			})

    	}
    }

    class Departamentito {
    	constructor(arg){
    		this.id = arg.id,
    		this.nombre = arg.nombre	
    	}

    	eliminar(idx){

			$mdDialog.show(
				$mdDialog.confirm().title('¿Seguro que quieres eliminar este departamento?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
			)
			.then(() => {

				Departamentos.eliminar(this.id).then(function(res) {
					self.departamentos.departamentos .splice(idx, 1)
					alertas.mostrarToastEstandar("Departamento eliminado exitosamente");
				})

			})

    	}
    }

    self.departamentos = new Departamento_()
    self.departamentos.obtener()

});
