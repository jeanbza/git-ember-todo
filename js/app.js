window.App = Ember.Application.create();

// MODEL

App.TodoItem = Ember.View.extend({
	title: "asd",
	content: "asd",
	clicked: false,
	click: function() {
		this.set('clicked', !this.clicked);
	}
});

App.TodoItems = Ember.ArrayController.create({
	items: [],
	addTodo: function(title, content) {
		var tempTodo = App.TodoItem.create({title: title, content: content});
		this.items.pushObject(tempTodo);
	}
});

// CONTROLLER

App.ApplicationController = Ember.Controller.extend({
	init: function() {
		for(x = 0; x < 5; x++) {
			App.TodoItems.addTodo("Title "+x, "Content "+x);
		}
	},

	addTodo: function() {
		App.TodoItems.addTodo(this.get("todoInput"), "No content");
	}
});