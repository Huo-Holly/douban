/**
 * Created by Administrator on 2017/07/18 0018.
 */

var app =  angular.module('app');

//设置白名单
app.config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://api.douban.com/**'
    ]);
}]);