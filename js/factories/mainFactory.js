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
			linkedin: "https://www.linkedin.com/in/vincentckhuang",
			resume: "https://drive.google.com/file/d/0BxhhJIS3qePrbzdmTVBxeXV4OHM/view?usp=sharing"
		}

		factory.contact = [
			"(626) 233-7056",
			"vincentckhuang@gmail.com"
		]

		factory.about = {
			title: "A passionate developer",
			blurb: "    As a Web Developer, I revel in the challenge of merging efficiency with problem solving. I recently graduated from USC with a BS in Biological Sciences. However, during my time at USC, my love for biology was overwhelmed by my new-found passion for programming after taking an introductory course for C++. While taking that course, I discovered my drive to solve problems that so often plague programmers. \n\n    I quickly decided that I would advance my expertise and flexibility as a programmer after graduating and I found General Assembly. Web Development appealed to me because its inherent usefulness in any professional field allows me to explore many different fields of work. I am always eager to expand and apply my skills as a web developer."
		}

		factory.projects = [
			{title: "PokeFighters", description: "    A Street-Fighter-like 2D fighting game with a Pokemon theme.\n\n    Built in a 1 week sprint with HTML5, CSS3, Javascript and jQuery.", link: "https://vinnilla.github.io/PokeFighters/", image: "https://raw.githubusercontent.com/vinnilla/PokeFighters/master/img/Charmander/charizard.png", sample: "http://i.imgur.com/TUAQHe1.png"},
			{title: "Squirtle Wordles", description: "    An educational spelling game for primary school students. \n\n   This collaborative hackathon with UX Designers had an educational theme and with the hype of Pokemon due to the overwhelming popularity of Pokemon Go, our team decided to work with the Pokemon theme. Elementary students who have no access to smart phones can join in on the Pokemon frenzy with our educational app. \n\n    We had 6 hours to plan, design and complete the web application.", link: "https://vinnilla.github.io/WDI-UXDI-Hackathon/", sample: "http://i.imgur.com/WgRiunk.png"},
			{title: "National Database for Pet Adoption", description: "    A database for locating humane societies and pet shelters across the nation. \n\n    We noticed that individual humane society websites tend to be outdated and hard to navigate. As non-profit organizations, humane societies cannot afford to hire a web developer to maintain and update their websites. Therefore, we decided to create a website/database that humane societies could use to post their contact information and, most importantly, their adoptable pets. \n\n    This project was built in a 1 week sprint as a team of 3 developers. We made a MEN stack app that incorporated Google's OAuth, Google Maps and Imgur.", link: "http://nadopet.herokuapp.com/", sample: "http://i.imgur.com/VRTvP8y.png"},
			{title: "Lan Party", description: "    A co-op endless zombie survival game powered by socket.io. This project is still under active development. \n\n    Version 0.1 was built in a 1 week sprint using the MEAN Stack and jQuery.", link: "http://lan-party.herokuapp.com", sample: "http://i.imgur.com/uPlbL2h.png"}
		]

		return factory;
	}

}());