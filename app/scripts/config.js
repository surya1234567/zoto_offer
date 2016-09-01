/**
 * myproject - Responsive Admin Theme
 * Copyright 2015
 *
 * myproject theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/smugglernumber/home");

    $stateProvider
        .state('smugglernumber', {
            abstract: true,
            url: "/smugglernumber",
            templateUrl: "views/common/content.html"
        })

        .state('smugglernumber.main', {
            url: "/home",
            templateUrl: "views/partials/sign-in.html",
            data: { pageTitle: 'Smugglernumber' }
        })

        .state('smugglernumber.home', {
            url: "/home",
            templateUrl: "views/home.html",
            data: { pageTitle: 'smugglernumber' }
        })
        .state('smugglernumber.login',{
            url: "/sign-in",
           templateUrl: "views/partials/sign-in.html"
        })

        //market routes
        .state('registration', {
            abstract: true,
            url: "/registration",
            templateUrl: "views/common/content2.html",
        })
        .state('registration.loginfirststep', {
            url: "/sign-up",
            templateUrl: "views/partials/loginfirststep.html",
            data: { pageTitle: 'smg-registration',loginid:null },
        })
        .state('registration.secondstep', {
            url: "/next-steps",
            templateUrl: "views/partials/register-second-step.html",
            data: { pageTitle: 'smg-registration' }
        })
        // .state('register', {
        //     //abstract: true,
        //     url: "/register",
        //     templateUrl: "views/sign-up.html",
        //     data: { pageTitle: 'Register' }
        // })
        //
        // .state('smugglernumber.main.loginfirststep',{
        //     url: "/sign-up",
        //     templateUrl: "views/partials/loginfirststep.html"
        //
        // })

}
angular
    .module('smugglernumber')
    .config(config);
// app.controller('stickdata',function($scope,$state){
//   //  alert($scope.emailid);
//     //$scope.loginemail=$stateParams.mydata;
//
// });