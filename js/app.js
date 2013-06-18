// The controller that's handling our app
function demoControl($scope) {
	// The list we are displaying
	$scope.someList = [
	{num:'1', name: 'Jack'},
	{num: '2', name: 'Jill'},
	{num: '3', name: 'Sarah'},
	{num: '4', name: 'Bob'},
	{num: '5', name: 'Sam'},
	{num: '6', name: 'Alex'}
	];

	// A function to add the name
	$scope.addName = function() {
		$scope.someList.push({num:$scope.someList.length+1, name:$scope.nameInput});
		$scope.nameInput = '';
	};

	// A function to clear the list
	$scope.clearList = function() {
		$scope.someList.length = 0;
		console.dir($scope.someList);
	};
}