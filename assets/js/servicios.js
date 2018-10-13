app.service('Trabajadores', function() {

    this.crear = function(trabajador) { return axios.post('/data/trabajadores', trabajador) }
    this.obtener = function() { return axios('/data/trabajadores/' ) }
    this.editar = function(trabajador) { return axios.put('/data/trabajadores/' + trabajador.id, trabajador) }
    this.one = function(id) { return axios('/data/trabajadores/' + id) }
    this.eliminar = function(id) { return axios.delete('/data/trabajadores/' + id) }


});

app.service('Departamentos', function() {

    this.crear = function(departamento) { return axios.post('/data/departamento', departamento) }
    this.obtener = function() { return axios('/data/departamento/' ) }
    this.editar = function(departamento) { return axios.put('/data/departamento/' + departamento.id, departamento) }
    this.one = function(id) { return axios('/data/departamento/' + id) }
    this.paginacion = function(items, pagina) { return axios('/data/departamento/paginacion/' + items + '/' + pagina ) }
    this.eliminar = function(id) { return axios.delete('/data/departamento/' + id) }


});

app.service('Asistentes', function() {

    this.crear = function(asistentes) { return axios.post('/data/asistentes', asistentes) }
    this.obtener = function() { return axios('/data/asistentes/' ) }
    this.editar = function(asistentes) { return axios.put('/data/asistentes/' + asistentes.id, asistentes) }
    this.one = function(id) { return axios('/data/asistentes/' + id) }
    this.eliminar = function(id) { return axios.delete('/data/asistentes/' + id) }


});

app.service('Horarios', function() {

    this.crear = function(horario) { return axios.post('/data/horarios', horario) }
    this.obtener = function() { return axios('/data/horarios/') }
    this.editar = function(horario) { return axios.put('/data/horarios/' + horario.id, horario) }
    this.one = function(id) { return axios('/data/horarios/' + id) }
    this.eliminar = function(id) { return axios.delete('/data/horarios/' + id) }


});

app.service('Turnos', function() {

    this.crear = function(turno) { return axios.post('/data/turnos', turno) }
    this.obtener = function() { return axios('/data/turnos/') }
    this.editar = function(turno) { return axios.put('/data/turnos/' + turno.id, turno) }
    this.one = function(id) { return axios('/data/turnos/' + id) }
    this.eliminar = function(id) { return axios.delete('/data/turnos/' + id) }


});

app.service('Roles', function() {

    this.crear = function(rol) { return axios.post('/data/roles', rol) }
    this.obtener = function() { return axios('/data/roles/') }
    this.editar = function(rol) { return axios.put('/data/roles/' + rol.id, rol) }
    this.one = function(id) { return axios('/data/roles/' + id) }
    this.eliminar = function(id) { return axios.delete('/data/roles/' + id) }


});


app.service('Imagenes', function() {

    this.crear = function(imagen) { return axios.post('/data/imagenes', imagen) }
    this.obtener = function() { return axios('/data/imagenes') }
    this.imagenTrabajador = function() { return axios('/data/imagenTrabajador') }
    this.editar = function(imagen) { return axios.put('/data/imagenes/' + imagen.id, imagen) }
    this.one = function(id) { return axios('/data/imagenes/' + id) }
    this.eliminar = function(id) { return axios.delete('/data/imagenes/' + id) }
    this.obtenerImagenTrabajador = function(id) { return axios('/data/imagenes/obtenerImagenTrabajador/' + id) }



});
