function findSmallest(arr) {
	let smallest = arr[0];
	let smallest_index = 0;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallest_index = i;
		}
	}

	return smallest_index;
}
