app.run([
    '$rootScope',
    '$state',
    '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.config([
    '$urlRouterProvider',
    '$stateProvider',
    function($urlRouterProvider, $stateProvider) {

        function template(seccion, vista, url) {
            let obj = {
                url: url,
                views: {
                    'main': {
                        templateUrl: '/' +  seccion + '/' + vista,
                        controller: vista + 'Ctrl as ctrl'
                    }
                },
                resolve: {
                    loadMyCtrl: [
                        '$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load([seccion + vista]);
                        }
                    ]
                }
            }
            return obj
        }

        $urlRouterProvider.otherwise('/');
        $stateProvider
        

        .state('home', template('main', 'home', '/'))
        // .state('home', template('/', '/main/home', 'homeCtrl', 'ozMainHome'))
    }
]);
