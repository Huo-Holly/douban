/**
 * Created by Administrator on 2017/07/18 0018.
 */

var app =  angular.module('app');

//创建MovieController控制器
app.controller('MovieController',['$scope','$routeParams','baseUrl','appHttp',
    function ($scope,$routeParams,baseUrl,appHttp) {

        $scope.isLoading = true;
        $scope.isOver = false;
        $scope.isNext = true;

        var url = baseUrl +  $routeParams.type;

       // console.log(url);
        //https://api.douban.com/v2/movie/coming_soon
        //http://localhost:63342/douban/

        $scope.loadData = function (start) {
            var params = {
                start:start,
                count:5
            };
            appHttp.jsonp(url,params,function (res) {

                $scope.res = res;

                $scope.isLoading = false;
                $scope.totalPage = Math.ceil(res.total/$scope.count);

                $scope.$apply();
            });
        };
        //一直加载数据
        $scope.loadData(0);

        $scope.curPage = 1;//当前是第几页
        $scope.count = 5;//一页显示多少条

        $scope.page = function (type) {
            if(type){
                $scope.curPage --;
            }
            else{
                $scope.curPage ++;
            }

            $scope.isOver = $scope.curPage == 1 ? false:true;
            $scope.isNext = $scope.curPage == $scope.totalPage ? false:true;

            var start = ($scope.curPage -1) * $scope.count;

            //从哪页的数据开始加载
            $scope.loadData(start);
        }

    }]);
