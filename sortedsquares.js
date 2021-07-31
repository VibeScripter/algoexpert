//Write a function that takes in a non-empty array of integers that are sorted
//in ascending order and returns a new array of the same length with the squares
//of the original integers also sorted in ascending order.



function sortedSquaredArray(array) {
	const sortedSquares = new Array(array.length).fill(0);
	
	for(let idx=0; idx < array.length; idx++) {
		const value = array[idx];
		sortedSquares[idx] = value * value;
	}
	sortedSquares.sort((a, b) => a - b);
	return sortedSquares;
	
	
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
