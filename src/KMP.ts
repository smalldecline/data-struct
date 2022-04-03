
function getNextArray(subStr: string) {
	let next = [0]
	for (let matchPoint = 1, successCount = 0; matchPoint < subStr.length; matchPoint++) {
		let selfPoint = successCount
		if (subStr[matchPoint] == subStr[selfPoint]) {
			successCount++
		} else {
			successCount = 0
		}
		next[matchPoint] = successCount
	}
	return next
}

function KMP(str: string, subStr: string): number {
	const next = getNextArray(subStr)
	for (let point = 0, subPoint = 0; point < str.length;) {
		if (str[point] == subStr[subPoint]) {
			point++
			subPoint++
		} else if (subPoint != 0) {
			subPoint = next[subPoint - 1]
		} else {
			point++
		}
		if (subPoint == subStr.length) return point - subPoint
	}
	return -1
}

export { KMP }