var CalcApp = angular.module('CalcApp', []);

CalcApp.controller('CalcCtrl', ['$scope', function($scope) {
  $scope.display = '0';

  var numArray = [];
  var storedNum = [];

  $scope.toggleVal = function(input) {
    numArray.push(input);
    joinedArray = numArray.join("")
    $scope.display = joinedArray;
    console.log(numArray.join(""));
  }

  $scope.delete = function(){
    numArray = [];
    $scope.display = '0';
  }

  $scope.div = function(){
    storedNum.push(numArray);
    numArray = [];

  }

  $scope.mult = function(){
    storedNum.push(numArray);
    numArray = [];

  }

  $scope.add = function(){
    storedNum.push(numArray);
    numArray = [];

  }

  $scope.sub = function(){
    storedNum.push(numArray);
    numArray = [];

  }
}])