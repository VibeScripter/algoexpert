function subarraySort(array) {
  let minOutofOrder = Infinity;
	let maxOutofOrder = -Infinity;
	for (let i = 0; i < array.length; i++) {
		const num = array[i];
		if (isOutofOrder(i, num, array)) {
			minOutofOrder = Math.min(minOutofOrder, num);
			maxOutofOrder = Math.max(maxOutofOrder, num);
		}
	}
	if (minOutofOrder === Infinity) {
		return [-1, -1];
	}
	let subarrayLeftIdx = 0;
	while (minOutofOrder >= array[subarrayLeftIdx]) {
		subarrayLeftIdx++;
	}
	let subarrayRightIdx = array.length - 1;
	while (maxOutofOrder <= array[subarrayRightIdx]) {
		subarrayRightIdx--;
	}
	return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutofOrder(i, num, array) {
	if (i === 0) return num > array[i + 1];
	if (i === array.length - 1) return num < array[i - 1];
	return num > array[i + 1] || num < array[i - 1];
}


// Do not edit the line below.
exports.subarraySort = subarraySort;
