const sortFrequenciesByDescendingIntegerValue = (k_) => {
	if (!k_) return []
	const pos = {},
		neg = {},
		len = k_.length
	let res = [],
		i = 0
	for (i; i < len; i++) {
		let el = k_[i]
		if (el < 0) {
			el *= -1
			if (neg[el]) {
				neg[el]++
			} else {
				neg[el] = 1
			}
		} else {
			if (pos[el]) {
				pos[el]++
			} else {
				pos[el] = 1
			}
		}
	}
	const occ = {}
	const nKeys = Object.keys(neg)
	const pKeys = Object.keys(pos)
	const pLen = pKeys.length
	const nLen = nKeys.length
	let p = 0
	let n = 0
	for (p; p < pLen; p++) {
		if (occ[pos[pKeys[p]]]) occ[pos[pKeys[p]]].push(pKeys[p])
		else occ[pos[pKeys[p]]] = [pKeys[p]]
	}
	for (n; n < nLen; n++) {
		if (occ[neg[nKeys[n]]]) occ[neg[nKeys[n]]].push(nKeys[n] * -1)
		else occ[neg[nKeys[n]]] = [nKeys[n] * -1]
	}
	const keys = Object.keys(occ)
	const kLen = keys.length
	let k = 0
	for (k; k < kLen; k++) {
		const el = occ[keys[k]]
		el.sort()
		el.reverse()
		const len = el.length
		let l = 0
		for (l; l < len; l++) {
			let x = 0
			const oc = el[l]
			while (x < keys[k]) {
				res.push(Number(oc))
				x++
			}
		}
	}
	return res
}

const arr = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
console.log(JSON.stringify(arr))
console.log(JSON.stringify(sortFrequenciesByDescendingIntegerValue(arr)))

