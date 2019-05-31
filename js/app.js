(function(angular) {
  'use strict';

angular.module('myApp', ['ngSanitize'])
.controller('skincareCtrl',function($scope,$rootScope,$location,$filter){
  $scope.skincares =  $filter('filter')(products, {type: "肌肤护理"},true);
  if ($location.search().class) {  
    $rootScope.class = $location.search().class;
  }
  else{
    $rootScope.class = '';
  }
  $scope.classfunc = function(){
   return $rootScope.class; 
  }
  /*$scope.$watch('$location.search().class', function(path) {
    $scope.$rootScope = $location.search().class;    
  });
  $scope.$watch('class', function(path) {
    $location.search({'class':$rootScope.class}); 
  });*/
})
.controller('bodynurseCtrl',function($scope,$rootScope,$location,$filter){
  $scope.bodynurses =  $filter('filter')(products, {type: "身体调理"},true);
  if ($location.search().class) {  
    $rootScope.class = $location.search().class;
  }
  else{
    $rootScope.class = '';
  }
  $scope.classfunc = function(){
   return $rootScope.class; 
  }
})
.controller('searchCtrl',function($scope,$rootScope,$location,$filter){
  $scope.products =  products;
  if ($location.search().kw) {
    $rootScope.kw = $location.search().kw;
  }
  else{
    $rootScope.kw = ' ';
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

var products = [
{"id":"A1","type":"肌肤护理","class":"补水","pname":"玫瑰纯露原液 30ml 纪念版","pimg":"images/itemlist/A1.jpg","pdis":"无添加香精、色素、防腐剂"},
{"id":"A2","type":"肌肤护理","class":"补水","pname":"玫瑰纯露原液 100ml","pimg":"images/itemlist/A2.jpg","pdis":"无添加香精、色素、防腐剂我们自己种植并提炼而成的高浓度玫瑰纯露。因不同年份的气候、存放时间长短不同年份的产品气味会略有不同，以存放陈化一年左右时间效果为最佳。因吸收快而产生收敛作用，最佳的护肤保湿水。纯大马士革花瓣蒸馏而成，没有添加任何其它物质，温和又安全。敏感性肌肤尤其适用。"},
{"id":"A3","type":"肌肤护理","class":"补水","pname":"玫瑰滋润保湿水100ml","pimg":"images/itemlist/A3.jpg","pdis":"无添加香精、色素、防腐剂考虑到冬季干燥气候及部分干性肌肤的需求，本款产品在玫瑰纯露中添加了玻尿酸（透明质酸），肤感更滋润保湿。"},
{"id":"B1","type":"肌肤护理","class":"手部","pname":"没药精油乳液（手部专用）清爽型50ml","pimg":"images/itemlist/B1.jpg","pdis":"90%玫瑰纯露（替代水）+没药精油+罗马洋甘菊精油。轻柔 适度滋润 防止干裂粗糙皲裂"},
{"id":"B2","type":"肌肤护理","class":"手部","pname":"薰衣草精油乳液（手部专用滋润型）50ml","pimg":"images/itemlist/B2.jpg","pdis":"90%玫瑰纯露（替代水）+薰衣草精油+甜茴香精油促进细胞再生 保湿滋润 改善肌肤松垮和毛孔粗大"},
{"id":"B3","type":"肌肤护理","class":"足部","pname":"安息香精油乳液（足部专用）100ml","pimg":"images/itemlist/B3.jpg","pdis":"90%玫瑰纯露（替代水）+安息香精油+茶树精油。防止龟裂干燥老化 滋润 抗菌"},
{"id":"B4","type":"肌肤护理","class":"面部","pname":"玫瑰精油乳液（面部、干性肌肤）100ml","pimg":"images/itemlist/B4.jpg","pdis":"90%玫瑰纯露（替代水）+大马士革玫瑰精油。易于渗透 提亮肤色 增强免疫 防老化"},
{"id":"B5","type":"肌肤护理","class":"面部","pname":"岩老草精油乳液（面部、油性肌肤）100ml","pimg":"images/itemlist/B5.jpg","pdis":"93%玫瑰纯露（替代水）+岩老草精油+薰衣草精油。杀菌 治疗粉刺痤疮 镇静 改善油性皮肤"},
{"id":"B6","type":"肌肤护理","class":"面部","pname":"花梨木精油乳液（面部、敏感肌肤）100ml","pimg":"images/itemlist/B6.jpg","pdis":"93%玫瑰纯露（替代水）+花梨木精油+罗马洋甘菊精油。活化免疫系统 抗皱 温和 皮肤净化"},
{"id":"B7","type":"肌肤护理","class":"眼部","pname":"橙花精油乳霜（眼部专用）30ml","pimg":"images/itemlist/B7.jpg","pdis":"90%玫瑰纯露（替代水）+橙花精油。渗透强 增加弹性 增加细胞活力 平滑细纹"},
{"id":"B8","type":"肌肤护理","class":"颈部","pname":"乳香精油乳液（颈部专用）100ml","pimg":"images/itemlist/B8.jpg","pdis":"90%玫瑰纯露（替代水）+乳香精油+玫瑰草精油。抚平皱纹 收敛 细胞再生 刺激皮脂分泌"},
{"id":"B9","type":"肌肤护理","class":"乳房","pname":"茴香精油乳液（乳房专用）100ml","pimg":"images/itemlist/B9.jpg","pdis":"90%玫瑰纯露（替代水）+茴香精油+天竺葵精油。紧实 除皱 调节荷尔蒙分泌 促进乳腺 促进血液流通孕妇儿童避免使用"},
{"id":"B10","type":"肌肤护理","class":"全身","pname":"葡萄柚精油乳液（全身适用）100ml","pimg":"images/itemlist/B10.jpg","pdis":"92%玫瑰纯露（替代水）+葡萄柚精油+胡萝卜籽精油。燃脂排水 控油 淡斑 消疤"},
{"id":"B11","type":"肌肤护理","class":"儿童","pname":"洋甘菊精油乳液（儿童身体使用）100ml","pimg":"images/itemlist/B11.jpg","pdis":"90%玫瑰纯露（替代水）+罗马洋甘菊精油。改善湿症、面疱、疹、干癣、超敏感皮肤及一般的过敏现象舒缓紧张 温和 婴儿首选"},
{"id":"C1","type":"身体调理","class":"欢愉","pname":"【心火】沁怡欢愉复方精油30ml","pimg":"images/itemlist/C1.jpg","pdis":"玫瑰精油+依兰精油+檀香精油+甜扁桃油（基础油）。增强性腺分泌 提升性致 身心欢愉月经期间、孕妇、癫痫病患者避免使用"},
{"id":"C2","type":"身体调理","class":"安神","pname":"【廊桥遗梦】舒缓怡神复方精油30ml","pimg":"images/itemlist/C2.jpg","pdis":"岩老草精油+橙花精油+薰衣草精油+扁桃油（基础油）。舒缓安抚 稳定 减压 镇静"},
{"id":"C3","type":"身体调理","class":"舒韵","pname":"【不能说的秘密】悦舒升韵调理精油30ml","pimg":"images/itemlist/C3.jpg","pdis":"月见草精油+胡萝卜籽精油+姜精油+洋甘菊精油+丝柏精油+鼠尾草精油+扁桃油（基础油）。调理身体机能 暖宫 保护女性生理机制"},
{"id":"C4","type":"身体调理","class":"塑身","pname":"【傲慢与偏见】塑性紧身按摩精油30ml","pimg":"images/itemlist/C4.jpg","pdis":"葡萄柚精油+柠檬精油+茴香精油+迷迭香精油+欧刺柏精油+欧洲榛子油（基础油）。燃脂 利尿 排毒 调节荷尔蒙 紧肤"},
{"id":"C5","type":"身体调理","class":"修复","pname":"【夏日么么茶】晒后修复调理精油 30ml","pimg":"images/itemlist/C5.jpg","pdis":"洋甘菊精油+茶树精油+薰衣草精油+橄榄果油+扁桃油（基础油）。修复 镇静 止痛杀菌 缓解肌肉"},
{"id":"D1","type":"肌肤护理","class":"面部","pname":"玫瑰精油乳液面膜 25ml","pimg":"images/itemlist/D1.jpg","pdis":"玫瑰纯露+玫瑰精油。精华渗透 营养 平衡油脂 保湿滋润"}
];
var products0 = [
{"id":"A1","type":"肌肤护理","class":"补水","pname":"玫瑰纯露原液 30ml 纪念版","pimg":"images/itemlist/A1.jpg","pdis":"<p>无添加香精、色素、防腐剂</p>"},
{"id":"A2","type":"肌肤护理","class":"补水","pname":"玫瑰纯露原液 100ml","pimg":"images/itemlist/A2.jpg","pdis":"<p>无添加香精、色素、防腐剂</p><p>我们自己种植并提炼而成的高浓度玫瑰纯露。因不同年份的气候、存放时间长短不同年份的产品气味会略有不同，以存放陈化一年左右时间效果为最佳。<br>因吸收快而产生收敛作用，最佳的护肤保湿水。<br>纯大马士革花瓣蒸馏而成，没有添加任何其它物质，温和又安全。<br>敏感性肌肤尤其适用。</p>"},
{"id":"A3","type":"肌肤护理","class":"补水","pname":"玫瑰滋润保湿水100ml","pimg":"images/itemlist/A3.jpg","pdis":"<p>无添加香精、色素、防腐剂</p><p>考虑到冬季干燥气候及部分干性肌肤的需求，本款产品在玫瑰纯露中添加了玻尿酸（透明质酸），肤感更滋润保湿。</p>"},
{"id":"B1","type":"肌肤护理","class":"手部","pname":"没药精油乳液（手部专用）清爽型50ml","pimg":"images/itemlist/B1.jpg","pdis":"<p>描述：90%玫瑰纯露（替代水）+没药精油+罗马洋甘菊精油</p><p>功效：轻柔 适度滋润 防止干裂粗糙皲裂</p>"},
{"id":"B2","type":"肌肤护理","class":"手部","pname":"薰衣草精油乳液（手部专用滋润型）50ml","pimg":"images/itemlist/B2.jpg","pdis":"<p>描述：90%玫瑰纯露（替代水）+薰衣草精油+甜茴香精油</p><p>促进细胞再生 保湿滋润 改善肌肤松垮和毛孔粗大</p>"},
{"id":"B3","type":"肌肤护理","class":"足部","pname":"安息香精油乳液（足部专用）100ml","pimg":"images/itemlist/B3.jpg","pdis":"<p>描述：90%玫瑰纯露（替代水）+安息香精油+茶树精油</p><p>功效：防止龟裂干燥老化 滋润 抗菌</p>"},
{"id":"B4","type":"肌肤护理","class":"面部","pname":"玫瑰精油乳液（面部、干性肌肤）100ml","pimg":"images/itemlist/B4.jpg","pdis":"<p>描述：90%玫瑰纯露（替代水）+大马士革玫瑰精油</p><p>功效：易于渗透 提亮肤色 增强免疫 防老化</p>"},
{"id":"B5","type":"肌肤护理","class":"面部","pname":"岩老草精油乳液（面部、油性肌肤）100ml","pimg":"images/itemlist/B5.jpg","pdis":"<p>描述：93%玫瑰纯露（替代水）+岩老草精油+薰衣草精油</p><p>功效：杀菌 治疗粉刺痤疮 镇静 改善油性皮肤</p>"},
{"id":"B6","type":"肌肤护理","class":"面部","pname":"花梨木精油乳液（面部、敏感肌肤）100ml","pimg":"images/itemlist/B6.jpg","pdis":"<p>描述：93%玫瑰纯露（替代水）+花梨木精油+罗马洋甘菊精油</p><p>功效：活化免疫系统 抗皱 温和 皮肤净化</p>"},
{"id":"B7","type":"肌肤护理","class":"眼部","pname":"橙花精油乳霜（眼部专用）30ml","pimg":"images/itemlist/B7.jpg","pdis":"<p>描述：90%玫瑰纯露（替代水）+橙花精油</p><p>功效：渗透强 增加弹性 增加细胞活力 平滑细纹</p>"},
{"id":"B8","type":"肌肤护理","class":"颈部","pname":"乳香精油乳液（颈部专用）100ml","pimg":"images/itemlist/B8.jpg","pdis":"<p>描述：90%玫瑰纯露（替代水）+乳香精油+玫瑰草精油</p><p>功效：抚平皱纹 收敛 细胞再生 刺激皮脂分泌</p>"},
{"id":"B9","type":"肌肤护理","class":"乳房","pname":"茴香精油乳液（乳房专用）100ml","pimg":"images/itemlist/B9.jpg","pdis":"<p>描述：90%玫瑰纯露（替代水）+茴香精油+天竺葵精油</p><p>功效：紧实 除皱 调节荷尔蒙分泌 促进乳腺 促进血液流通<br>孕妇儿童避免使用</p>"},
{"id":"B10","type":"肌肤护理","class":"全身","pname":"葡萄柚精油乳液（全身适用）100ml","pimg":"images/itemlist/B10.jpg","pdis":"<p>描述：92%玫瑰纯露（替代水）+葡萄柚精油+胡萝卜籽精油</p><p>功效：燃脂排水 控油 淡斑 消疤</p>"},
{"id":"B11","type":"肌肤护理","class":"儿童","pname":"洋甘菊精油乳液（儿童身体使用）100ml","pimg":"images/itemlist/B11.jpg","pdis":"<p>描述：90%玫瑰纯露（替代水）+罗马洋甘菊精油</p><p>功效：改善湿症、面疱、疹、干癣、超敏感皮肤及一般的过敏现象<br>舒缓紧张 温和 婴儿首选</p>"},
{"id":"C1","type":"身体调理","class":"欢愉","pname":"【心火】沁怡欢愉复方精油30ml","pimg":"images/itemlist/C1.jpg","pdis":"<p>描述：玫瑰精油+依兰精油+檀香精油+甜扁桃油（基础油）</p><p>功效：增强性腺分泌 提升性致 身心欢愉<br>月经期间、孕妇、癫痫病患者避免使用</p>"},
{"id":"C2","type":"身体调理","class":"安神","pname":"【廊桥遗梦】舒缓怡神复方精油30ml","pimg":"images/itemlist/C2.jpg","pdis":"<p>描述：岩老草精油+橙花精油+薰衣草精油+扁桃油（基础油）</p><p>功效：舒缓安抚 稳定 减压 镇静</p>"},
{"id":"C3","type":"身体调理","class":"舒韵","pname":"【不能说的秘密】悦舒升韵调理精油30ml","pimg":"images/itemlist/C3.jpg","pdis":"<p>描述：月见草精油+胡萝卜籽精油+姜精油+洋甘菊精油+丝柏精油+鼠尾草精油+扁桃油（基础油）</p><p>功效：调理身体机能 暖宫 保护女性生理机制</p>"},
{"id":"C4","type":"身体调理","class":"塑身","pname":"【傲慢与偏见】塑性紧身按摩精油30ml","pimg":"images/itemlist/C4.jpg","pdis":"<p>描述：葡萄柚精油+柠檬精油+茴香精油+迷迭香精油+欧刺柏精油+欧洲榛子油（基础油）</p><p>功效：燃脂 利尿 排毒 调节荷尔蒙 紧肤</p>"},
{"id":"C5","type":"身体调理","class":"修复","pname":"【夏日么么茶】晒后修复调理精油 30ml","pimg":"images/itemlist/C5.jpg","pdis":"<p>描述：洋甘菊精油+茶树精油+薰衣草精油+橄榄果油+扁桃油（基础油）</p><p>功效：修复 镇静 止痛杀菌 缓解肌肉</p>"},
{"id":"D1","type":"肌肤护理","class":"面部","pname":"玫瑰精油乳液面膜 25ml","pimg":"images/itemlist/D1.jpg","pdis":"<p>描述：玫瑰纯露+玫瑰精油</p><p>功效：精华渗透 营养 平衡油脂 保湿滋润</p>"}
];
//angular.module('myApp', []).directive('slideshow', function () {
