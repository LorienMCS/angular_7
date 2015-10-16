var app = angular.module("partSevenApp", ['ui.bootstrap', 'angularMoment', 'ngAnimate']);

app.controller("RedditClone", function($scope) {
	$scope.postForm = false;
	$scope.posts = [{
		'title': 'a cute puppy',
		'author': 'First Author',
		'image': 'https://upload.wikimedia.org/wikipedia/commons/6/64/The_Puppy.jpg',
		'desc': 'A cute puppy in Megalochori, on Santorini Island, Greece.',
		'date': new Date(),
		'votes': 0,
		'comments': []
	}, {
		'title': 'A St. Bernard puppy',
		'author': 'Second Author',
		'image': 'https://upload.wikimedia.org/wikipedia/commons/7/71/St._Bernard_puppy.jpg',
		'desc': 'A St. Bernard puppy playing in some fall leaves.',
		'date': new Date(),
		'votes': 0,
		'comments': []
	}, {
		'title': 'Abyssinian kittens',
		'author': 'Third Author',
		'image': 'https://upload.wikimedia.org/wikipedia/commons/b/ba/4_Abyssian_kittens.jpg',
		'desc': 'Abyssinian kittens looking up.',
		'date': new Date(),
		'votes': 0,
		'comments': []
	}, {
		'title': 'Mount Everest',
		'author': 'Fourth Author',
		'image': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
		'desc': 'Aerial view of Mount Everest from the south. The peak rises over Lhotse, while Nuptse is the ridge on the left.',
		'date': new Date(),
		'votes': 0,
		'comments': []
	}, {
		'title': 'Upper Yosemite Fall',
		'author': 'Fifth Author',
		'image': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Yosemite_Falls_from_trail,_Yosemite_NP,_CA,_US_-_Diliff.jpg',
		'desc': 'Upper Yosemite Fall as viewed from the trail leading to the top.',
		'date': new Date(),
		'votes': 0,
		'comments': []
	}];
	$scope.post = {};
	$scope.post.comments = [];
	$scope.post.comment = {};
	$scope.commentForm = false;
	$scope.commentsView = false;
	$scope.sortChoice = '-votes';

	$scope.showPostForm = function() {
		$scope.postForm = true;
	};

	$scope.addPost = function() {
		if ($scope.formPost.$valid) {
			$scope.post.date = new Date();
			$scope.post.votes = 0;
			$scope.posts.push($scope.post);
			$scope.post = {};
			$scope.postForm = false;
			$scope.formPost.$setUntouched();
		}
	};

	$scope.showCommentForm = function(post) {
		this.commentsView = false;
		this.commentForm = true;
	};

	$scope.addComment = function(post) {
		// useful for figuring out what *this* is in this case
		// console.log(post);
		// console.log(this);
		// console.log(this.comment);
		post.comments.push(this.comment);
		this.comment = {};
		this.commentForm = false;
		this.commentsView = true;
	};

	$scope.toggleComments = function(post) {
		if(this.commentsView == false) {
			this.commentsView = true;
		} else {
		this.commentsView = false;
		}
	};

})