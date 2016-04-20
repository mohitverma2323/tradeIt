var app = angular.module('tradeIt', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "homeController"})
    .when("/records", {templateUrl: "partials/records.html", controller: "recordsController"})
    .when("/addrecord", {templateUrl: "partials/newRecord.html", controller: "addRecordController"})
    .when("/balance", {templateUrl: "partials/balance.html", controller: "balanceController"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "homeController"});
}]);

