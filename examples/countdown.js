function countdown(i) {
	console.log(i);
	if (i <= 1) {
		return;
	} else {
		countdown(i - 1);
	}
}
