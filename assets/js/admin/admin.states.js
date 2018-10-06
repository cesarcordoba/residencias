app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {


	function template(url, template, controller, oz, params) {
		let obj = {
			url: url,
			params: params,
			views: {
				'main': {
					templateUrl: template,
					controller: controller + ' as ctrl'
				}
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([oz]);
					}
				]
			}
		}
		return obj
	}

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', template('/', '/admin/home', 'homeCtrl', 'adminhome'))

	.state('administrador', template('/administrador', '/admin/administrador', 'administradorCtrl', 'adminadministrador'))
	.state('administrador.trabajadores', template('/trabajadores', '/admin/trabajadores', 'trabajadoresCtrl', 'admintrabajadores'))
	.state('administrador.departamentos', template('/departamentos', '/admin/departamentos', 'departamentosCtrl', 'admindepartamentos'))
	.state('administrador.trabajador', template ('/trabajador/:id', '/admin/trabajador', 'trabajadorCtrl', 'admintrabajador', { 'id' : null }))
	.state('administrador.departamento', template ('/departamento/:id', '/admin/departamento', 'departamentoCtrl', 'admindepartamento', { 'id' : null }))
	.state('administrador.conexion', template ('/conexion', '/admin/conexion', 'conexionCtrl', 'adminconexion'))
	.state('administrador.horarios', template ('/horarios', '/admin/horarios', 'horariosCtrl', 'adminhorarios'))
	.state('administrador.asistencias', template ('/asistencias', '/admin/asistencias', 'asistenciasCtrl', 'adminasistencias'))

}]);


