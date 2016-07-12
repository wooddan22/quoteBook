angular
    .module('quoteBook')
    .controller('mainCtrl', function($scope, quoteService){


        console.log(quoteService.quotes);
        $scope.quotes = quoteService.quotes;
        $scope.addQuote = quoteService.addQuote;
        $scope.removeQuote = quoteService.removeQuote;
    }) //end MainCtrl