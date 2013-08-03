<html>
<head>
	<script type="text/javascript" src="js/jquery/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui/ui/jquery-ui.js"></script>
	<script type="text/javascript" src="js/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/ember/handlebars-1.0.0-rc.4.js"></script>
	<script type="text/javascript" src="js/ember/ember-1.0.0-rc.6.js"></script>
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
					<legend>
						<span>Create A TODO</span>
						<span><small>Note: double click to edit</small></span>
					</legend>
					{{view App.InputField action="addTodo" class="todo-input" placeholder="Enter a todo" valueBinding="todoInput"}}
					<button {{action addTodo}} class="btn btn-primary btn-submit-todo">
						<i class="icon-ok icon-white"></i>
					</button>
				</div>
			</div>

			{{#each todoItem in App.TodoItems.items}}
				{{view todoItem}}
			{{/each}}
		</div>
	</script>

	<script type="text/x-handlebars" data-template-name="todo-item">
		<div class="span3 leftmost-span">
			{{#view todoItem.title}}
				{{#if todoItem.title.isEditing}}
					{{view App.InputField valueBinding="todoItem.title.content" class="edit-todo-input"}}
				{{else}}
					{{todoItem.title.content}}
				{{/if}}
			{{/view}}
		</div>

		<div class="span8">
			{{#view todoItem.content}}
				{{#if todoItem.content.isEditing}}
					{{view App.InputField valueBinding="todoItem.content.content" class="edit-todo-input"}}
				{{else}}
					{{todoItem.content.content}}
				{{/if}}
			{{/view}}
		</div>

		<div class="span1 right-align">
			<button {{action removeTodo todoItem}}>
				<i class="icon-trash"></i>
			</button>
		</div>
	</script>
</body>
</html>