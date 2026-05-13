class Solution {
	/**
	 * @param {string[]} strs
	 * @returns {string}
	 */
	encode(strs) {
		let encodedStr = "";
		for (const str of strs) {
			encodedStr += str.length + "#" + str;
		}
		return encodedStr;
	}

	/**
	 * @param {string} str
	 * @returns {string[]}
	 */
	decode(str) {
		const decodedStr = [];
		let i = 0;
		while (i < str.length) {
			let j = i; //pointer for delimeter
			//find delimeter #
			while (str[j] !== "#") {
				j++;
			}
			//get length of string
			const length = parseInt(str.slice(i, j), 10);
			decodedStr.push(str.slice(j + 1, j + 1 + length));
			i = j + 1 + length;
		}
		return decodedStr;
	}
}
