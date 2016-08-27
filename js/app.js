(function() {
	'use strict';

	angular.module('portfolio', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/home');

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'partials/home.html',
					controller: 'homeController as home'
				})
				.state('skills', {
					url: '/skills',
					templateUrl: 'partials/skills.html',
					controller: 'skillsController as skills'
				})
				.state('projects', {
					url: '/projects',
					templateUrl: 'partials/projects.html',
					controller: 'projectsController as projects'
				})
				.state('contact', {
					url: '/contact',
					templateUrl: 'partials/contact.html',
					controller: 'contactController as contact'
				})
		});

}());