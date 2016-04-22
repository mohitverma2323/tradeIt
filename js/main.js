var app = angular.module('tradeIt', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "homeController"})
    .when("/records", {templateUrl: "partials/records.html", controller: "recordsController"})
    .when("/addrecord", {templateUrl: "partials/newRecord.html", controller: "addRecordController"})
    .when("/balance", {templateUrl: "partials/balance.html", controller: "balanceController"})
    .when("/contacts", {templateUrl: "partials/contacts.html", controller: "contactsController"})
    .when("/addContact", {templateUrl: "partials/addContact.html", controller: "contactsController"})
    .when("/items", {templateUrl: "partials/items.html", controller: "itemsController"})
    .when("/addItem", {templateUrl: "partials/addItem.html", controller: "itemsController"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "homeController"});
}]);

