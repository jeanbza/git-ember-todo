<html>
<head>
	<script type="text/javascript" src="js/jquery/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui/ui/jquery-ui.js"></script>
	<script type="text/javascript" src="js/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/angular/angular.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>

	<link rel="stylesheet" type="text/css" href="css/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap/css/bootstrap-responsive.min.css">
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body ng-app>
	<div ng-controller="demoControl" class="container-fluid">
		<div class="row-fluid">
			<h1>This is a demo <small>of Angular.js usage</small></h1>
			<span>
				Explanation
			</span>
		</div>
		<div class="row-fluid addNameArea">
			<form ng-submit="addName()">
				<fieldset>
					<label><strong>Add A Name Here</strong></label>
					<input ng-model="nameInput" type="text" placeholder="Add A Name Here">
					<button type="submit" class="btn btn-primary">Submit</button>
					<button ng-click="clearList()" type="button" class="btn">Clear List</button>
				</fieldset>
			</form>
		</div>
		<div class="row-fluid">
			<table class="table">
				<thead>
					<tr>
						<td>#</td>
						<td>Name</td>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="listItem in someList">
						<td>{{listItem.num}}</td>
						<td>{{listItem.name}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>