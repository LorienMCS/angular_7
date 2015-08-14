var app = angular.module("partSevenApp", ['ui.bootstrap', 'angularMoment']);

app.controller("RedditClone", function($scope){
	$scope.postForm = false;
	$scope.posts = [];
	$scope.post = {};

	$scope.showPostForm = function() {
			$scope.postForm = true;
	};

	$scope.addPost = function() {
		if($scope.formPost.$valid){
			$scope.post.time = new Date();
			$scope.posts.push($scope.post);
			$scope.post = {};
			$scope.postForm = false;
			$scope.formPost.$setUntouched();
		}
	};

})