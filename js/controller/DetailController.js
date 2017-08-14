/**
 * Created by Administrator on 2017/07/18 0018.
 */

var app = angular.module('app');

app.controller('DetailController',['$scope','$routeParams','appHttp',function ($scope,$routeParams,appHttp) {

    var id = $routeParams.id;
    var url = "http://api.douban.com/v2/movie/subject/"+id;

    appHttp.jsonp(url,null,function (res) {

        $scope.res = res;

        $scope.$apply();
    })

}]);

