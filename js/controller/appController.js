/**
 * Created by Administrator on 2017/07/18 0018.
 */

var app =  angular.module('app');

//创建整个应用的控制器
app.controller('myController',['$scope',function ($scope) {

    $scope.title = "豆瓣电影";

    //设置标题颜色切换
    $scope.type = 'in_theaters';
    $scope.change = function (type) {
        $scope.type = type;
    }

}]);