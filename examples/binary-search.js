function binary_search(array, item) {
	let low = 0;
	let high = array.length - 1;

	while (low <= high) {
		mid = Math.floor((low + high) / 2);
		guess = array[mid];

		if (guess == item) {
			return mid;
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;
}

my_array = [1, 3, 5, 7, 9];
console.log(binary_search(my_array, 5));
