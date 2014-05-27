<html>
<head>
    <script type="text/javascript" src="js/jquery/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui/ui/jquery-ui.js"></script>
    <script type="text/javascript" src="js/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/ember/handlebars-1.0.0-rc.4.js"></script>
    <script type="text/javascript" src="js/ember/ember-1.0.0-rc.6.js"></script>
    <script type="text/javascript" src="js/ember/ember-data-latest.min.js"></script>
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
                    {{view App.InputField action="addTodo" class="todo-input" placeholder="Enter a todo" valueBinding="todoInput"}}
                    <button {{action addTodo}} class="btn btn-primary btn-submit-todo">
                        <i class="icon-ok icon-white"></i>
                    </button>
                </div>
            </div>
            {{#each todo in todos}}
                {{view "App.TodoItemView"}}
            {{/each}}
        </div>
    </script>

    <script type="text/x-handlebars" data-template-name="todo-item-template">
        <div class="row-fluid tall-row">
            {{#view "App.TodoDetailView"}}
                <div class="span3 left-item">
                    {{#if view.isEditing}}
                        {{view App.InputField valueBinding="todo.title" class="edit-todo-input"}}
                    {{else}}
                        {{todo.title}}
                    {{/if}}
                </div>
            {{/view}}
            {{#view "App.TodoDetailView"}}
                <div class="span8 middle-item">
                    {{#if view.isEditing}}
                        {{view App.InputField valueBinding="todo.content" class="edit-todo-input"}}
                    {{else}}
                        {{todo.content}}
                    {{/if}}
                </div>
            {{/view}}
            <div class="span1 right-item">
                <button {{action removeTodo todo}}><i class="icon-trash"></i></button>
            </div>
        </div>
    </script>
</body>
</html>