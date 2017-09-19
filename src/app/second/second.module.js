import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import SecondComponent from './second.component';
import SecondRouting from './second.routing';

const SecondModule = angular.module('app.second', [uiRouter])
    .config(SecondRouting)
    .component('secondComponent', SecondComponent)
;

export default SecondModule;