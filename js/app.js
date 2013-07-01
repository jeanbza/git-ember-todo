window.App = Ember.Application.create();

// MODEL

App.TodoItem = Ember.View.extend({
	title: "",
	content: "",
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

// VIEW

App.TodoInput = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
	}
});

// CONTROLLER

App.ApplicationController = Ember.Controller.extend({
	init: function() {
		for(x = 0; x < 5; x++) {
			App.TodoItems.addTodo("TODO "+x, "Content "+x+" - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet tempor sem.");
		}
	},

	addTodo: function() {
		App.TodoItems.addTodo(this.get("todoInput"), "No content.");
	}
});