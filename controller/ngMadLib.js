angular.module('myApp', ['ngMessages'])
.controller('ngMadLibController', function($scope, $attrs) {
	$scope.gender = '';
	$scope.name='Name'; 
	$scope.jobTitle='Job Title'; 
	$scope.tediousTask='Tedious Task'; 
	$scope.dirtyTask='Dirty Task'; 
	$scope.celebrity='Celebrity'; 
	$scope.uselessSkill='Useless Skill'; 
	$scope.adjective='Adjective'; 
	$scope.obnoxiuousCelebrity='Obnoxiuous Celebrity'; 
	$scope.hugeNumber='';

	$scope.submit = function() {
		if($scope.userInputForm.$valid){
			$scope.showLoading = !$scope.showLoading;
		}
		return $scope.userInputForm.$valid;
	};

  	$scope.resetForm = function() {

  	$scope.gender = '';
	$scope.name=''; 
	$scope.jobTitle=''; 
	$scope.tediousTask=''; 
	$scope.dirtyTask=''; 
	$scope.celebrity=''; 
	$scope.uselessSkill=''; 
	$scope.adjective=''; 
	$scope.obnoxiuousCelebrity=''; 
	$scope.hugeNumber='';

	$scope.userInputForm.$submitted = false;
	
  	};
});