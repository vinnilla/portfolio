(function() {
	'use strict';

	angular.module('portfolio')
		.factory('mainFactory', main);

	main.$inject = [];

	function main() {
		var factory = {};

		factory.vincent = {
			first: "Vincent",
			last: "Huang",
			github: "https://github.com/vinnilla",
			linkedin: "https://www.linkedin.com/in/vincentckhuang"
		}

		factory.contact = [
			"(626) 233-7056",
			"vincentckhuang@gmail.com"
		]

		factory.about = {
			title: "Full Stack Web Developer"
		}

		factory.projects = [
			{title: "PokeFighters", description: "A Street-Fighter-like 2D fighting game with a Pokemon theme. Built in a 1 week sprint with HTML5, CSS3, Javascript and jQuery.", link: "https://vinnilla.github.io/PokeFighters/", image: "https://raw.githubusercontent.com/vinnilla/PokeFighters/master/img/Charmander/charizard.png"},
			{title: "Squirtle Wordles", description: "An educational spelling game for primary school students. This collaborative hackathon with UX Designers had an educational theme and with the hype of Pokemon due to the overwhelming popularity of Pokemon Go, our team decided to work with the Pokemon theme. Elementary students who have no access to smart phones can join in on the Pokemon frenzy with our educational app. We had 6 hours to plan, design and complete the web application.", link: "https://vinnilla.github.io/WDI-UXDI-Hackathon/"},
			{title: "National Database for Pet Adoption", description: "We noticed that individual humane society websites tend to be outdated and hard to navigate. As non-profit organizations, humane societies cannot afford to hire a web developer to maintain and update their websites. Therefore, we decided to create a website/database that humane societies could use to post their contact information and, most importantly, their adoptable pets. This project was built in a 1 week sprint as a team of 3 developers. We made a MEN stack app that incorporated Google's OAuth, Google Maps and Imgur.", link: "http://nadopet.herokuapp.com/"}
		]

		return factory;
	}

}());