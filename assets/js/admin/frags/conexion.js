var app = angular.module('myapp');

app.controller('conexionCtrl', function($scope, $rootScope, $http, mdDialog, Imagenes, Trabajadores, alertas, Asistentes) {


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
	self.verificar = 1;

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
						if(self.verificar === 1){
							let obj = {nombre: $scope.trabajador.nombre, horaLlegada: 	$scope.horas+ " : "+$scope.minutos+ " hrs."}
							Asistentes.crear(obj).then(response => console.log(response.data))
							self.verificar = 2;
						}else{
							let obj = {id:$scope.trabajador.id, horaSalida: 	$scope.horas+ " : "+$scope.minutos+ " hrs."}
							Asistentes.editar(obj).then(response => console.log(response.data))
						}

		            })

					self.mostrarInfo = true;
	                console.log("si existe");
		        }else{
		           alertas.mostrarToastEstandar("NO SE ENCONTRO TU HUELLA(vuelve a intentar)!!!");

		        }
		    })

		}

		limpiar(){
			self.mostrarInfo = false;
		}

		resetDropify() {
			$scope.inputImage = null;
			$(".dropify-clear").trigger("click");
		}

	}

	self.imagenes = new Imagenes_()

});
