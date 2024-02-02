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
console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"

// 2 задача
const sumUniqueNumbers = (arr) => {
	let uniqueNums = new Set(arr);
	return Array.from(uniqueNums).reduce((a, b) => a + b, 0);
};
console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15

// 3 задача
const mergeArrays = (...arrays) => {
	let merged = [].concat(...arrays); 
	let unique = [...new Set(merged)]; 
	return unique;
};
console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 4 задача
const hasProperty = (obj, prop) => {
  return obj.hasOwnProperty(prop);
};
console.log(hasProperty({name: "Alice", age: 25}, "age")); // true

// 5 задача
const getPropertyValue = (obj, prop) => {
	return obj.hasOwnProperty(prop) ? obj[prop] : undefined;
};
console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"

// 6 задача 
const invertObject = (obj) => {
	return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
 };

const originalObject1 = { a: 1, b: 2, c: 1 };
const invertedObject1 = invertObject(originalObject1);
console.log(invertedObject1); // Выведет: { '1': 'c', '2': 'b' }



 
