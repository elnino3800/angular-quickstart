import angular from 'angular';

import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.css';

import AppComponent from "./app.component";
import HomeModule from "./home/home.module";


const AppModule = angular.module('app', [HomeModule.name])
  .component('app', AppComponent);

export default AppModule;