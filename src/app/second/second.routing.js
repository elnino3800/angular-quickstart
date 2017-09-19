const SecondRouting = /*@ngInject*/ function ($stateProvider) {
    $stateProvider
        .state('second', {
            url: '/second',
            component: 'secondComponent'
        });
};

export default SecondRouting;