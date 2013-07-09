// INIT

window.App = Ember.Application.create();

// MODEL

App.TodoItems = Ember.ArrayController.create({
	items: [],

	addTodo: function(title, content) {
		var tempTitle = App.TodoDetail.create({content: title});
		var tempContent = App.TodoDetail.create({content: content});
		var tempTodo = App.TodoItem.create({title: tempTitle, content: tempContent});

		this.items.pushObject(tempTodo);
	}
});

// VIEW

App.TodoItem = Ember.View.extend({
	title: null,
	content: null,
	classNames: ["row-fluid", "tall-row", "todoItem"],

	didInsertElement: function() {
		this.$().popover({
			html: true,
			title: self.title,
			placement: "left",
			trigger: "hover",
			title: this.title.content,
			content: this.content.content
		});
	}
});

App.InputField = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
	}
});

App.TodoDetail = Ember.View.extend({
	content: "",
	tagName: "div",
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

// CONTROLLER

App.ApplicationController = Ember.Controller.extend({
	init: function() {
		for(x = 0; x < 5; x++) {
			App.TodoItems.addTodo("TODO "+x, "Content "+x+" - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet tempor sem.");
		}
	},

	addTodo: function() {
		App.TodoItems.addTodo(this.get("todoInput"), "No content.");
		this.set("todoInput", "");
	},

	modifyTodo: function(todoItem) {
		todoItem.set("modifiable", !todoItem.modifiable);
	},

	removeTodo: function(todoItem) {
		App.TodoItems.items.removeObject(todoItem);
	}
});