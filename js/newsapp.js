(function(angular) {
  'use strict';

angular.module('myApp', ['ngRoute'])
.controller('MyController', ['$scope', function ($scope) {
  $scope.greetMe = 'ROSA FIVE';
}])
.controller('newsController',function($scope){
  
})
/*.controller('MainCtrl',function($route, $routeParams, $location){
  this.$route = $route;
  this.$location = $location;
  this.$routeParams = $routeParams;
})*/
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/Book/:bookId', {
        templateUrl: '/news/book.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
      })
      .when('/Book/:bookId/ch/:chapterId', {
        templateUrl: '/news/book.html',
        controller: 'ChapterCtrl',
        controllerAs: 'chapter'
      })
    .when('/top/',{
       templateUrl: 'news/top.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
    })
          
    .otherwise('/top/');
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}])
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
})
.controller('BookCtrl', ['$routeParams', function($routeParams) {
  this.name = "BookCtrl";
  this.params = $routeParams;
}])
.controller('ChapterCtrl', ['$routeParams', function($routeParams) {
  this.name = "ChapterCtrl";
  this.params = $routeParams;
}]);
/*.controller('MainCtrl', ['$route', '$routeParams', '$location',
  function($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}])*/;
/*
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/',{
    templateUrl: 'new/news.html',
    controller: 'newsController'
  })
   .when('/news/:id', {
    templateUrl: 'news.html',
    controller: 'newsController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/Book/:bookId/ch/:chapterId', {
    templateUrl: 'chapter.html',
    controller: 'ChapterController'
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});
*/

angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});
  
})(window.angular);
/*
it('should load and compile correct template', function() {
  element(by.linkText('Moby: Ch1')).click();
  var content = element(by.css('[ng-view]')).getText();
  expect(content).toMatch(/controller\: ChapterCtrl/);
  expect(content).toMatch(/Book Id\: Moby/);
  expect(content).toMatch(/Chapter Id\: 1/);

  element(by.partialLinkText('Scarlet')).click();

  content = element(by.css('[ng-view]')).getText();
  expect(content).toMatch(/controller\: BookCtrl/);
  expect(content).toMatch(/Book Id\: Scarlet/);
});*/