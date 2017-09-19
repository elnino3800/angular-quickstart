const HomeRouting = /*@ngInject*/ function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            component: 'mainComponent'
        })
        .state('main.detail', {
            url: '/detail',
            views: {
                "@": {
                    component: 'detailComponent',
                }

            }
        });
    $urlRouterProvider.otherwise('/main');
    $locationProvider.hashPrefix('');
};


export default HomeRouting;