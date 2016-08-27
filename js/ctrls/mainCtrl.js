(function() {
	'use strict';

	angular.module('portfolio')
		.controller('mainController', main)
		.controller('homeController', home)
		.controller('skillsController', skills)
		.controller('projectsController', projects)
		.controller('contactController', contact);

	main.$inject = ['mainFactory'];
	home.$inject = ['mainFactory'];
	skills.$inject = ['mainFactory'];
	projects.$inject = ['mainFactory'];
	contact.$inject = ['mainFactory'];

	function main(factory) {
		var self = this;
		this.factory = factory;

	}// end of main function

	function home(factory) {
		var self = this;
		this.factory = factory

	}// end of home function

	function skills(factory) {
		var self = this;
		this.factory = factory

	}// end of skills function

	function projects(factory) {
		var self = this;
		this.factory = factory

	}// end of projects function

	function contact(factory) {
		var self = this;
		this.factory = factory

	}// end of contact function


}());