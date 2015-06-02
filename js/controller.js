var app = angular.module('myApp', ['angularMoment']);
app.controller('sbadminCtrl', function($scope, $http) {
    $scope.notifications = [
        {description:'New Comment',type:'comment',date:new Date(2015, 5, 1, 12, 51)},
        {description:'3 New Followers',type:'twitter',date:new Date(2015, 5, 1, 12, 33)},
        {description:'Message Received',type:'envelope',date:new Date(2015, 5, 1, 10, 12)},
		{description:'New Task',type:'tasks',date:new Date(2015, 5, 1, 9, 37)},
		{description:'Server Rebooted',type:'upload',date:new Date(2015, 5, 1, 9, 12)},
		{description:'Server Crashed!',type:'bolt',date:new Date(2015, 5, 1, 8, 57)},
		{description:'Server Not Responding',type:'warning',date:new Date(2015, 5, 1, 8, 34)},
		{description:'New Order Placed',type:'shopping-cart',date:new Date(2015, 5, 1, 8, 5)},
		{description:'Payment Received',type:'money',date:new Date(2015, 5, 1, 7, 48)},
		{description:'New Comment',type:'comment',date:new Date(2015, 4, 30, 18, 32)}
    ];
	
	$scope.addNotificationForm = {};
	$scope.addNotificationForm.types = [
             { id : "comment"}
            ,{ id : "twitter"}
            ,{ id : "envelope"}
			,{ id : "tasks"}
			,{ id : "upload"}
			,{ id : "bolt"}
			,{ id : "warning"}
		    ,{ id : "shopping-cart"}
			,{ id : "money"}
             ];
	
	$scope.addNotification = function() {
         $scope.notifications.unshift({description:$scope.addNotificationForm.description,type:$scope.addNotificationForm.type,date:new Date()});
    };
});