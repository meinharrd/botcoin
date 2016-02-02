mainApp = angular.module('main', ['firebase']);

mainApp.controller('mainCtrl', function($scope, $firebaseObject) {
	var ref = new Firebase('your firebase url');
	$scope.data = $firebaseObject(ref);
});