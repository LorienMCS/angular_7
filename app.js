var app = angular.module("partSevenApp", ['ui.bootstrap', 'angularMoment']);

app.controller("RedditClone", function($scope) {
	$scope.postForm = false;
	$scope.posts = [{
		'title': 'a cute cat with flower',
		'author': 'First Author',
		'image': 'http://i.imgur.com/TKPyjuF.jpg',
		'desc': 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jÃ­cama salsify.',
		'date': new Date(),
		'votes': 0,
		'comments': []
	}, {
		'title': 'a cute cat sleeping, looking so innocent ',
		'author': 'Second Author',
		'image': 'http://i.imgur.com/GMTHO5R.jpg',
		'desc': 'Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.',
		'date': new Date(),
		'votes': 0,
		'comments': []
	}, {
		'title': 'Staring contest with a siamese kitty ',
		'author': 'Third Author',
		'image': 'http://i.imgur.com/IJSE7X4.jpg?1',
		'desc': 'Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.',
		'date': new Date(),
		'votes': 0,
		'comments': []
	}, {
		'title': 'Black White Cats kiss',
		'author': 'Fourth Author',
		'image': 'http://i.imgur.com/NxuQ0xE.jpg',
		'desc': 'Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jÃ­cama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut.',
		'date': new Date(),
		'votes': 0,
		'comments': []
	}, {
		'title': 'Newest member of the family Mia!',
		'author': 'Fifth Author',
		'image': 'https://scontent-lax1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10345754_496959293770962_1114720528058961988_n.jpg?oh=bbf3d2dfda0fba7fd500caf92835b7e5&oe=56413C1A',
		'desc': 'Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.',
		'date': new Date(),
		'votes': 0,
		'comments': []
	}];
	$scope.post = {};
	$scope.post.comments = [];
	$scope.post.comment = {};
	$scope.post.commentForm = false;
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

	$scope.showCommentForm = function() {
		$scope.post.commentForm = true;
	};

	$scope.addComment = function() {
		$scope.post.comments.push($scope.post.comment);
	}

})