import angular from 'angular';
import uiRouter from 'angular-ui-router';

import MainComponent from './main.component';
import DetailComponent from './detail.component';

const HomeModule = angular.module('app.home', [uiRouter])
    .config(/*@ngInject*/ function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                component: 'mainComponent'
            })
            .state('main.detail', {
                url: 'detail',
                views: {
                    "@": {
                        component: 'detailComponent',
                    }

                }
            });
        $urlRouterProvider.otherwise('/');
    })

    .config(/*@ngInject*/ function ($locationProvider) {
        $locationProvider.hashPrefix('');
    })

    .component('mainComponent', MainComponent)
    .component('detailComponent', DetailComponent);

export default HomeModule;