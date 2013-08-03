// INIT

window.App = Ember.Application.create();

// VIEW

/**
 * This is a todo item view
 * @param {string}     templateName	Tells ember which template to render into
 * @param {TodoDetail} title        The title (view) of our todo item
 * @param {TodoDetail} content      The content (view) of our todo item
 * @param {array}      classNames   An array of strings that ember will assign as classnames to this view's DOM element
 */
App.TodoItem = Ember.View.extend({
	templateName: 'todo-item',

	title: null,
	content: null,
	classNames: ["row-fluid", "tall-row", "todoItem"],

	didInsertElement: function() {
		this.attachPopover();
	},

	titleChanged: function() {
		this.attachPopover();
	}.observes('title.textContent'),

	contentChanged: function() {
		this.attachPopover();
	}.observes('content.textContent'),

	attachPopover: function() {
		this.$().popover('destroy');
		this.$().popover({
			html: true,
			title: self.title,
			placement: "left",
			trigger: "hover",
			title: this.title.textContent,
			content: this.content.textContent
		});
	}
});

/**
 * An individual detail about a todo item. We want this because different parts of our todo item will act differently 
 * (e.g. double clicking delete icon is not the same as clicking the todo title) and independently (e.g. I should
 * be able to double click and edit the title independently of the content)
 * @param {string}  textContent The text content of this part of the todo item (e.g. title's text, content's text)
 * @param {string}  tagName     The tagname ember will assign to this view
 * @param {boolean} isEditing   A boolean in charge of keeping track of whether this view is being edited (by user double 
 *                              click) or not
 */
App.TodoDetail = Ember.View.extend({
	textContent: "",
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

App.InputField = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
	}
});

// CONTROLLER

/**
 * Controller which is mostly in charge of modifying the model
 * @param {string} todoInput The valueBinding location which the giant Add A Todo input box targets
 */
App.ApplicationController = Ember.Controller.extend({
	todoInput: "",

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

// MODEL: Please note, in a real world application our model would probably not be represented as such - instead,
// 		  we would use the DB and a DS.Store. For the sake of simplicity, we will skip that for now

/**
 * This controller holds our todo item views and knows how to add more. It basically acts as our 'pseudo-model'
 * @param {array} items Our 'model' - an array of views
 */
App.TodoItems = Ember.ArrayController.create({
	items: [],

	init: function() {
		for(x = 0; x < 5; x++) {
			this.addTodo("TODO "+x, "Content "+x+" - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet tempor sem.");
		}
	},

	addTodo: function(title, content) {
		var tempTitle = App.TodoDetail.create({textContent: title});
		var tempContent = App.TodoDetail.create({textContent: content});
		var tempTodo = App.TodoItem.create({title: tempTitle, content: tempContent});

		this.items.pushObject(tempTodo);
	}
});