/**
 * Created by Administrator on 2017/07/18 0018.
 */

//创建模块
var app = angular.module('app');

//设置url
app.value('baseUrl', 'https://api.douban.com/v2/movie/');

//创建服务
app.service('appHttp', ['$window', function ($window) {

    this.jsonp = function (url, params, callback) {

        //生成一个方法
        var callbackName = 'callback' + Math.random().toString().slice(2);

        //声明方法
        $window[callbackName] = function (res) {

            callback(res);

            $window.document.body.removeChild(newScript);
        };

        //添加script标签
        var newScript = $window.document.createElement('script');

        var queryString = "";
        for(key in params){
            queryString += key + '=' + params[key] + '&'
        }
        queryString += 'callback='+ callbackName;

        url += "?" + queryString;
        newScript.src = url;
        $window.document.body.appendChild(newScript);

    }

}]);