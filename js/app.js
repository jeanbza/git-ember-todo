window.App = Ember.Application.create();

App.TodoItem = Ember.Object.extend({
	title: "",
	content: ""
});

App.ApplicationController = Ember.Controller.extend({
	someItems: ["one", "two", "three"]
});