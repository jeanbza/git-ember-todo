<html>
<head>
	<script type="text/javascript" src="js/jquery/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui/ui/jquery-ui.js"></script>
	<script type="text/javascript" src="js/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/ember/handlebars-1.0.0-rc.4.js"></script>
	<script type="text/javascript" src="js/ember/ember-1.0.0-rc.6.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>

	<link rel="stylesheet" type="text/css" href="css/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap/css/bootstrap-responsive.min.css">
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>
	<script type="text/x-handlebars">
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span12">
					<legend>Create A TODO</legend>
					<input class="todo-input" type="text" placeholder="Add a TODO">
					<button class='btn btn-primary btn-submit-todo'><i class='icon-ok icon-white'></i></button>
				</div>
			</div>
			{{#each someItem in someItems}}
				<div class="row-fluid">
					<div class="span6">
						{{someItem}}
					</div>
					<div class="span6">
						{{someItem}}
					</div>
				</div>
			{{/each}}
		</div>
	</script>
</body>
</html>