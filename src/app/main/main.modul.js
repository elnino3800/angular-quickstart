angular.module('app.main', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/view/main.html',
                controller: 'MainCtrl',
                controllerAs: 'ctrl'
            })

            .state('main.detail', {
                url: 'detail',
                views: {
                    "@": {
                        templateUrl: 'app/main/view/detail.html',
                        controller: 'DetailCtrl',
                        controllerAs: 'ctrl'
                    }

                }
            })
    })
;