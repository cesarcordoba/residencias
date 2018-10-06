app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {

    function template(seccion, vista) {
	    let obj = {
	        name: seccion + vista,
	        files: [ 'js/' + seccion + '/frags/' + vista + '.js' ]
	    }
	    return obj
	}



    $ocLazyLoadProvider.config({
        debug: true,
        modules: [
            template('admin', 'home'),
            template('admin', 'trabajadores'),
            template('admin', 'departamentos'),
            template('admin', 'trabajador'),
            template('admin', 'departamento'),
            template('admin', 'administrador'),
            template('admin', 'conexion'),
            template('admin', 'horarios'),
            template('admin', 'asistencias')
        ]
    });
}]);
