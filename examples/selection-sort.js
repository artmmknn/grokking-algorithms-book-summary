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

function selectionSort(arr) {
	newArr = [];

	for (let i = 0; i < arr.length; i++) {
		smallest = findSmallest(arr);
		newArr.push(arr.splice(arr.indexOf(smallest), 1));
	}

	return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
