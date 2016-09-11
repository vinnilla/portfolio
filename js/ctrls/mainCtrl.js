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
		this.words = ['Full', 'Stack', 'Web', 'Developer']
	}// end of home function

	function skills(factory) {
		var self = this;
		this.factory = factory
		this.languages = [
			[{icon: 'devicon-html5-plain', level: '0.95'}, {icon: 'devicon-css3-plain', level: '0.9'}, {icon: 'devicon-javascript-plain', level: '0.9'}, {icon: 'devicon-ruby-plain', level: '0.66'}, {icon: 'devicon-cplusplus-plain', level: '0.45'}],
			[{icon: 'devicon-jquery-plain', level: '0.9'}, {icon: 'devicon-angularjs-plain', level: '0.8'}],
			[{icon: 'devicon-nodejs-plain', level: '0.8'}, {icon: 'devicon-rails-plain', level: '0.6'}],
			[{icon: 'devicon-postgresql-plain', level: '0.6'}, {icon: 'devicon-mongodb-plain', level: '0.9'}],
			[{icon: 'devicon-git-plain', level: '0.95'}, {icon: 'devicon-github-plain', level: '0.95'}]
		]
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