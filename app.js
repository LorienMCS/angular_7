var app = angular.module("partSevenApp", ['ui.bootstrap', 'angularMoment']);

app.controller("RedditClone", function($scope){
	$scope.postForm = false;
	$scope.posts = [];
	$scope.post = {};
	$scope.post.comments = [];
	$scope.post.comment = {};

	$scope.showPostForm = function() {
			$scope.postForm = true;
	};

	$scope.addPost = function() {
		if($scope.formPost.$valid){
			$scope.post.date = new Date();
			$scope.post.votes = 0;
			$scope.posts.push($scope.post);
			$scope.post = {};
			$scope.postForm = false;
			$scope.formPost.$setUntouched();
		}
	};

})