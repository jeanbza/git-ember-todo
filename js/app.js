// INIT

window.App = Ember.Application.create();

// ROUTE

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return App.Todo.find();
    },

    setupController: function(controller, model) {
        this.controllerFor('application').set('todos', model);
    }
});

// MODEL

App.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter.create()
});

App.Todo = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string')
});

App.Todo.FIXTURES = [
    {id: 1, title: "Go to the grocery store", content: "For bread, butter, milk, and other stuff"},
    {id: 2, title: "Milk the cow", content: "Because we live on a farm I suppose"},
    {id: 3, title: "Collect honey", content: "I think that's also something people on farms do"},
    {id: 4, title: "Fetch kids from school", content: "Carpooling with David from Finance"},
    {id: 5, title: "I don't know", content: "What people put on lists like these"}
];

// VIEW

App.TodoItemView = Ember.View.extend({
    templateName: "todo-item-template"
});

App.TodoDetailView = Ember.View.extend({
    isEditing: false,

    doubleClick: function() {
        this.set("isEditing", true);
    },

    keyUp: function(e) {
        if(e.keyCode == 13) {
            this.set("isEditing", false);
        }
    },

    focusOut: function() {
        this.set("isEditing", false);
    }
});

App.InputField = Ember.TextField.extend({
    didInsertElement: function() {
        this.$().focus();
    }
});

// CONTROLLER

App.ApplicationController = Ember.Controller.extend({
    todoInput: "",
    todos: [],

    addTodo: function() {
        App.Todo.createRecord({
            title: this.get('todoInput'),
            content: "Temp content"
        });
        this.set('todoInput', "");
    },

    removeTodo: function(todo) {
        todo.deleteRecord();
    }
});