import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import MainComponent from './main.component';
import DetailComponent from './detail.component';
import HomeRouting from './home.routing';

const HomeModule = angular.module('app.home', [uiRouter])
    .config(HomeRouting)
    .component('mainComponent', MainComponent)
    .component('detailComponent', DetailComponent);

export default HomeModule;