/**
 * Created by Administrator on 2017/07/18 0018.
 */

var app =  angular.module('app');

//配置路由

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/movie/:type', {
        templateUrl: 'list_tpl.html',
        controller: 'MovieController'
    }).when('/detail/:id', {
        templateUrl: 'movie_detail_tpl.html',
        controller: 'DetailController'
    }).otherwise({
        redirectTo: '/movie/in_theaters'
    });
}]);