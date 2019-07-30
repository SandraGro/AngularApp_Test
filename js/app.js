var app = angular.module('expensesApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'views/expenses.html',
        controller:'ExpensesViewcontroller'
    })
    .when('/expenses',{
        templateUrl: 'views/expenses.html',
        controller:'ExpensesViewcontroller'
    })
    .when('/expenses/new',{
        templateUrl: 'views/expenseForm.html',
        controller:'ExpensesViewcontroller'
    })
    .when('/expenses/edit/id:',{
        templateUrl: 'views/expenseForm.html',
        controller:'ExpensesViewcontroller'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('HomeViewController', ['$scope', function($scope){
    $scope.appTitle = 'Simple Expenses Tracker';
}]);

app.controller('ExpensesViewcontroller', ['$scope', function($scope){
    $scope.expenses = [
        {description: 'food', amount: 10, date: '2014-10-01'},
        {description: 'tickets', amount: 11, date: '2014-10-03'},
        {description: 'food', amount: 12, date: '2014-10-04'},
        {description: 'phone credit', amount: 13, date: '2014-10-04'},
        {description: 'bills', amount: 14, date: '2014-10-05'},
        {description: 'food', amount: 15, date: '2014-10-06'}
    ]
}]);

app.controller('ExpenseViewController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.someText = 'The world ir round. ID=' + $routeParams.id;
}]);