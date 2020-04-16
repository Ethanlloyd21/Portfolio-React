const portfolioData = {
	"imageUrl": 'http://localhost:3000/',
	"logo": "images/app-logo.svg",
	"logoWhite": "images/app-logo-white.svg",
	"name": 'Lloyd Marcelino',
	"role": 'Full-Stack Developer',
	"intro": "I create simple and stylish websites and applications",
	"projects": [
		{
			"id": 0,
			"title": "Employee Directory using React/API",
			"imageUrl": "images/portfolio/sample.PNG",
			"link": "https://ethanlloyd21.github.io/React-Employee-Directory/",
			"codeLink": "https://github.com/Ethanlloyd21/React-Employee-Directory",
			"description": "This application uses React to break up the UI into components, manage component state and respond to user events.",
			"technology": ["HTML/CSS", "Bootstrap", "Node.js", "React"],
		},
		{
			"id": 1,
			"title": "Sneaker Inventory",
			"imageUrl": "images/portfolio/dashboard.PNG",
			"link": "https://agile-headland-04774.herokuapp.com/",
			"codeLink": "https://github.com/Ethanlloyd21/project-2",
			"description": "The JLR Shoes CRM is used by the JLR Shoe company to track inventory, supplier info, and vendor info. It gives JLR Shoe company an advantage over the competition by having the most important company information accurately displayed in one place. This CRM was created using React, Sequelize, and MySQL.",
			"technology": ["HTML/CSS", "Javascript", "React", "Sequalize", "Express", "Chart.js", "MySQL"],
		},
		{
			"id": 2,
			"title": "Budget Tracker using PWA",
			"imageUrl": "images/portfolio/budget.PNG",
			"link": "https://lloyd-budget-tracker-pwa.herokuapp.com/",
			"codeLink": "https://github.com/Ethanlloyd21/Budget-Tracker",
			"description": "Using Progressive Web Application (PWA) this application enables the user to add expenses and deposits to their budget with or without an online connection. When entering transactions offline, data should populate the total when connected back online.",
			"technology": ["HTML/CSS", "Javascript", "jQuery", "Express", "Bootstrap", "Chart.js", "MongoDB", "Mongoose", "IndexedDB"],
		},
		{
			"id": 3,
			"title": "Log-in Authentication using React",
			"imageUrl": "images/portfolio/auth.PNG",
			"link": "https://drive.google.com/file/d/16a7xBDngn1zJm_vv_ZVdRjvJUYIy957t/view",
			"codeLink": "https://github.com/Ethanlloyd21/Username-Password-Authentication-React",
			"description": "This is a simple application of a username and password authentication using a third party application called OKLA.",
			"technology": ["HTML/CSS", "Javascript", "jQuery", "React", "Okta"]
		},
		{
			"id": 4,
			"title": "Portfolio using React",
			"imageUrl": "images/portfolio/web.PNG",
			"link": "https://lloydmarcelino.com",
			"codeLink": "https://github.com/Ethanlloyd21/Portfolio-React",
			"description": "My Professional Portfolio",
			"technology": ["HTML/CSS", "SASS", "JavaScript", "React"]
		},
		{
			"id": 5,
			"title": "Fitness Tracker",
			"imageUrl": "images/portfolio/resistance.PNG",
			"link": "https://workout-tracker-mongodb.herokuapp.com/",
			"codeLink": "https://github.com/Ethanlloyd21/Workout-Tracker",
			"description": "Workout-Tracker application tracks the user's exercise routine and outputs the result using charts (graphs). This application is build with Mongo database, a Mongoose schema and handle routes with Express using HTML, CSS, JavaScript and jQuery.",
			"technology": ["HTML/CSS", "Bootstrap", "Javascript/jQuery", "Chart.js", "Express", "Node.js", "MongoDB", "Mongoose"]
		},
		{
			"id": 6,
			"title": "Weather Dashboard",
			"imageUrl": "images/portfolio/weather2.PNG",
			"link": "https://ethanlloyd21.github.io/Weather-Dashboard/",
			"codeLink": "https://github.com/Ethanlloyd21/Weather-Dashboard",
			"description": "This app uses OpenWeather API to retrieve weather data for cities. An AJAX is used to hook into the API and retrieve data in JSON format. The app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
			"technology": ["HTML/CSS", "Bootstrap", "Javascript/Jquery"]
		},
		{
			"id": 7,
			"title": "Trivia QUIZ challenge",
			"imageUrl": "images/portfolio/quiz.PNG",
			"link": "https://ethanlloyd21.github.io/Code-Quiz/",
			"codeLink": "https://github.com/Ethanlloyd21/Code-Quiz",
			"description": "This projects was my thesis that aimed to help those students especially IT students or those people who wants to learn java programming language.",
			"technology": ["HTML/CSS", "Javascript", "jQuery"]
		},
		{
			"id": 8,
			"title": "ROXANNE (AMAZON)",
			"imageUrl": "images/portfolio/roxanne.jpg",
			"link": "",
			"codeLink": "https://github.com/Ethanlloyd21/ROXANNE",
			"description": "Roxanne is JAVA application created for Amazon GSOC team. Users access the app to get information (contacts, emails, etc.), ping panels, manage and create trouble tickets, view Amazon ORBIT, get scripts/ tamper monkey, view SOP and schedules. ROXANNE helps the team productivity.",
			"technology": ["Java", "Java Window Builder"]
		},
	],
	"skills": [
		{
			"name": "HTML/CSS",
			"percentage": 95
		},
		{
			"name": "JS/ jQueary",
			"percentage": 85
		},
		{
			"name": "REACT",
			"percentage": 70
		},
		{
			"name": "Node/ Express",
			"percentage": 80
		},
		{
			"name": "Java",
			"percentage": 75
		},
		{
			"name": "MySQL/ MongoDB",
			"percentage": 70
		},
	],

	"workExp": [
		{
			"title": "GSOC Analyst",
			"date": 'October 2016- Present',
			"description": "Designed and implemented basic web application. Performed data management, administrative process, crisis management, escalation and investigation.",
			"company": 'Amazon via AUS'
		},
		{
			"title": "Security Specialist",
			"date": 'March 2015 - October 2016',
			"company": 'Amazon via SIS',
			"description": " Delivered outstanding customer service by managing customer's conflicts and challenging situations. Enforced client policy and regulations, and investigated all facility related incidents."
		},
	]

}

export default portfolioData;