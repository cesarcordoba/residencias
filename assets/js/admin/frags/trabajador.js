var app = angular.module('myapp');

app.controller('trabajadorCtrl', function($scope, $rootScope, alertas, $http, mdDialog, $stateParams, Trabajadores, Horarios, Departamentos, Roles, Turnos, Imagenes) {

	var id = $stateParams.id
	$scope.mostrar = false;

Departamentos.obtener().then(res => {
	$scope.departamentos = res.data;
	$scope.$digest();
})

Roles.obtener().then(res => {
	$scope.roles = res.data;
	$scope.$digest();
})

Turnos.obtener().then(res => {
	$scope.turnos = res.data;
	$scope.$digest();
})

Horarios.obtener().then(res => {
	$scope.horarios = res.data;
	$scope.$digest();
})

Imagenes.obtenerImagenTrabajador(id).then(res => {
	if(res.data[0].imagen === undefined){
		$scope.mostrar = false
	}else{
		$scope.mostrar = true
	}
	$scope.imagensita = res.data[0].imagen
	$scope.$digest()

})

	$scope.desplegar = () =>{

		 $scope.abrir = !$scope.abrir
	}
	$scope.desplegar2 = () =>{

		 $scope.abrir2 = !$scope.abrir2
	}


	//Obtiene la informacion del trabajador
	Trabajadores.one(id).then(res => {
		$scope.trabajador = res.data;
		$scope.$digest();
		console.log(res.data);
	})

	$scope.editarTrabajador = (trabajador) => {
		if(trabajador.imagen === undefined){
			console.log('no hay imagen')
			$scope.mostrar = true;
		}
		else{
			$scope.mostrar = false;
			console.log('si hay imagen')
		}
		console.log(trabajador);
		Trabajadores.editar(trabajador).then(res => {
			alertas.mostrarToastEstandar("Guardado exitosamente!!!");
			$scope.mostrar = false;
		})
	}

	$scope.guardarImagen = (imagen) =>{

		obj = {
			imagen: imagen.imagen,
			id_trabajador: id
		}
		Imagenes.crear(obj)
		.then(res => {
			$scope.mostrar = true
			$scope.imagensita = res.data.imagen
			console.log($scope.imagensita)
			$scope.$digest();
			alertas.mostrarToastEstandar("Imagen agregada exitosamente");
		})
		


	}

	

});
