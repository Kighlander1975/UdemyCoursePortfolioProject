// File: /typewriter.js

const greetings = document.getElementById('greetings');

const greetingsTypewriter = new Typewriter(greetings, {
	loop: true,
	cursor: "_",
});

greetingsTypewriter.typeString('Hello,')
	.pauseFor(2500)
	.deleteAll()
	.typeString('Bonjour,')
	.pauseFor(2500)
	.deleteAll()
	.typeString('Hola,')
	.pauseFor(2500)
	.deleteAll()
	.typeString('Ciao,')
	.pauseFor(2500)
	.deleteAll()
	.typeString('Hallo,')
	.pauseFor(2500)
	.start();