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

		let l = 0;
		let r = str.length;

		while (l < r) {
			let i = l;
			//find # position
			while (str[i] !== "#" ) {
				i++;
			}
			//count str length
			const length = parseInt(str.slice(l, i)); // l to i excluding #
			const word = str.slice(i + 1, i + 1 + length);
			decodedStr.push(word);
			//update pointers
			l = i + 1 + length;
		}
    return decodedStr;
	}
}
