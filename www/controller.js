var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){ /*just like the $scope example, not compressing javascript, so no need [] and $routeProvider before*/
	$routeProvider
	/*.when('/', {
		template: 'Welcome user!'
	})
	.when('/anotherPage', {
		template: 'Welcome user, again!'
	})
	.otherwise({
		redirectTo: '/'
	});*/	
	
	/*templateUrl is different from template*/
	.when('/', {
		templateUrl: 'login.html', /*the framework launch ajax request to this html file*/
		/*template: '<b>This is template</b>'*/ /*the order is not important, always show to template*/
	})
	.when('/dashboard', {
		templateUrl: 'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
	
});

app.controller('loginCtrl', function($scope, $location){
	$scope.submit = function() {
		var uname = $scope.username;
		var password = $scope.password;
		if($scope.username == 'admin' && $scope.password == 'admin'){
			/*window.location.hash = '#/dashboard'; the 2 command are similar*/
			$location.path('/dashboard'); /*hash is to prevent the base from loading*/
		} else {
			alert('Wrong Username or Password');
		}
	};
});

/*Conditional routing: allow to put some conditions, if conditiona are matched, then only redirect user to that page*/