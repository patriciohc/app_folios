var token = null;
var app = angular.module('mainApp', []);


app.controller('registroFoliosController', function($scope, $http) {
    
});


app.controller('signUp', function($scope, $http){
    $scope.registrar = function(){
        var config = tools.getSettings('POST', '/api/user/create', $scope.user);
        $http(config).success(Login.init).error(tools.genericFunctionError);
    }
});



window.onload = function(){
    
    Login.initFromLocal();

}