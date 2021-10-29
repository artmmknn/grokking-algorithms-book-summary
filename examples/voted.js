voted = {};

function check_voted(name) {
	if (voted.hasOwnProperty(name)) {
		console.log('kick them out!');
	} else {
		voted[name] = true;
		console.log('let them vote!');
	}
}
