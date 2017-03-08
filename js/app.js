angular.module("myApp",[])
.controller("myController",function($scope){
  $scope.newUser ={};
  $scope.clickedUser = {};
  $scope.message = "";

  $scope.users = [
    {username: "Maorz", fullName: "Cesar Mauricio Ruiz Tulande", email:"Maorz314@gmail.com"},
    {username: "Kellymupe", fullName: "Kelly Muñoz", email:"keyos1994@gmail.com"}
  ];

  $scope.saveUser = function(){
    $scope.users.push($scope.newUser);
    $scope.newUser ={};
    $scope.message = "Usuario agregado correctamente!!";
  };

  $scope.selectUser = function(user){
    $scope.clickedUser = user;
  };

  $scope.updateUser = function(){

  };

  $scope.deleteUser = function(){
    $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
  };

  $scope.clearMessage = function(){
    $scope.message = "";
  };
});
