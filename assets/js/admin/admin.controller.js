app.controller('adminCtrl', function ($scope, $rootScope, $http, mdDialog, $timeout, $mdSidenav, AuthService, $localStorage, $transitions, $state, alertas) {



    $scope.secciones = [
        {
            nombre: 'Home',
            state: 'home',
            icon : 'home'
        }, {
            nombre: 'Administrador',
            state: 'administrador.trabajadores',
            icon : 'work'
        }

    ];

    $scope.Dropify = function() {

        $('.dropify').dropify({
            messages: {
                default: 'Agregar',
                replace: 'Reemplazar',
                remove: 'Eliminar',
                error: 'Error'
             }
        });

        $('.dropify').on('change', function() {

            var input = this;
            if(input.files && input.files[0]){
                var reader = new FileReader();

                reader.onload = function(e) {
                    $scope.$apply(function(){
                        $scope.inputImage = e.target.result;
                    });
                }

                reader.readAsDataURL(input.files[0]);
            }
        });

    };

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }


});
