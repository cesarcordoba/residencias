var app = angular.module('myapp');

app.controller('conexionCtrl', function($scope, $rootScope, $http, mdDialog, Imagenes, Trabajadores, alertas) {


	Imagenes.obtener()
	.then(res => {
	    $scope.TodasImagenes = res.data
	    console.log($scope.TodasImagenes)
	})

	$scope.Digital = new Date();
	$scope.horas = $scope.Digital.getHours();
	$scope.minutos = $scope.Digital.getMinutes();
	$scope.segundos = $scope.Digital.getSeconds();

	var self = this;
	self.cargarLoader = false;
	self.mostrarInfo = false;

	class Imagenes_{

		constructor() {
			this.item = {},
			this.TodasImagenes = []
		}

		guardarImagen(imagen){
			//self.cargarLoader = true
			var imagen2 = 'data:image/png;base64,' + imagen.base64;
			console.log(imagen2)
			self.imagenes.resetDropify();
			$scope.TodasImagenes.every(n => {

		        if(n.imagen === imagen2)
		        {
					Trabajadores.one(n.id_trabajador).then(res => {
		                $scope.trabajador = res.data;
		                $scope.$digest();
		                console.log($scope.trabajador);
		            })
					self.mostrarInfo = true;
	                console.log("si existe");
		        }else{
		           alertas.mostrarToastEstandar("NO SE ENCONTRO TU HUELLA(vuelve a intentar)!!!");

		        }
		    })

		}

		resetDropify() {
			$scope.inputImage = null;
			$(".dropify-clear").trigger("click");
		}

	}

	self.imagenes = new Imagenes_()

});
