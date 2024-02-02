// 1 задача
const findLongestWord = (arr) => {
	let longestWord = '';
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > longestWord.length) {
			longestWord = arr[i];
		}
	}
	return longestWord;
};
// 2 задача
const sumUniqueNumbers = (arr) => {
	let uniqueNums = new Set(arr);
	return Array.from(uniqueNums).reduce((a, b) => a + b, 0);
};
// 3 задача
const mergeArrays = (...arrays) => {
	let merged = [].concat(...arrays); 
	let unique = [...new Set(merged)]; 
	return unique;
};
// 4 задача
const hasProperty = (obj, prop) => {
  return obj.hasOwnProperty(prop);
};
// 5 задача
const getPropertyValue = (obj, prop) => {
	return obj.hasOwnProperty(prop) ? obj[prop] : undefined;
};
// 6 задача 
const invertObject = (obj) => {
	return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
 };


 
