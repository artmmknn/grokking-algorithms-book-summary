function count(arr) {
	if (arr.length == 1) {
		return 1;
	}

	arr.shift();

	return 1 + count(arr);
}
