(function(angular) {
  'use strict';

angular.module('myApp', ['ngSanitize','ngRoute'])
.config(function($routeProvider,$locationProvider){
    $routeProvider
      .when('/:id', { templateUrl:'item/tpl.html',controller:'itemCtrl'})
      .otherwise('/a1');
    $locationProvider.hashPrefix('!');
})
.controller('itemCtrl',function($scope,$rootScope,$routeParams,$http){
  $scope.currentindex = 0;
  $rootScope.navs = [0];
  $http.get("json/" + $routeParams.id + ".json")
  .success(function(data) {
    $rootScope.product = data;
    if ($rootScope.product.pimgs.length > 0){       
      $rootScope.pimg = $rootScope.product.pimgs[$scope.currentindex];
      
      for (var i=1; i<$rootScope.product.pimgs.length; i++){
       $rootScope.navs.push(i);
      }
      //jQuery('.nav li:first').addClass('active');
      //$rootScope.isactive = true;
    
    }
  })
  .error(function(error){alert(error);});
  
  $rootScope.navactive = function(index){
    $scope.currentindex = index;
    //jQuery('.nav li').removeClass('active');
    //$rootScope.navs[index].active = true;
    $rootScope.pimg = $rootScope.product.pimgs[$scope.currentindex];
  }
  $rootScope.setActive = function(index){
   if (index ==  $scope.currentindex){
    return 'active'; 
   }
  }
  
  $rootScope.prev = function(){
    if ($scope.currentindex > 0){
      $scope.currentindex--;
    }
    else {
      $scope.currentindex = $scope.product.pimgs.length - 1;
    }
    $rootScope.pimg = $rootScope.product.pimgs[$scope.currentindex];
  }
  $rootScope.next = function(){
    if ($scope.currentindex < $rootScope.product.pimgs.length-1){
      $scope.currentindex ++;
    }
    else {
      $scope.currentindex = 0;
    }
    $rootScope.pimg = $rootScope.product.pimgs[$scope.currentindex];
  }  
})
.controller('dlCtrl',function($scope,$http,$filter){
  $scope.dl = {no:'',img:"images/logo_small.png"};
  $http.get("json/daili.json")
  .success(function(data) {
    $scope.dailis = data;
  });
  $scope.scdl = function(){
    $scope.dl.img = 'images/logo_small.png'; 
    $scope.daili = $filter('filter')($scope.dailis,{"NO":$scope.dl.no},true);
    if ($scope.daili.length > 0){
      $scope.dl.img = 'images/daili/' + $scope.dl.no + '.jpg';     
    }
    else {
      $scope.dl.img = 'images/daili/nofind.png'; 
    }    
  }  
});
angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});


})(window.angular);
