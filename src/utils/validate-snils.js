
export function validateSnils(snils) {
	let isCorrect = false
	if(snils === undefined) {
		isCorrect = true
	} else if (/[^0-9]/.test(snils)) {
        return isCorrect
	} else if (parseInt(snils) <= 1001998) {
        return isCorrect
    } else {
		let sum = 0
        let checkDigit = 0
		for (let i = 0; i < 9; i++) {
			sum += parseInt(snils[i]) * (9 - i)
		}
		if (sum < 100) {
			checkDigit = sum
		} else if (sum === 100 || sum === 101) {
            checkDigit = 0
		} else if (sum > 101) {
			checkDigit = parseInt(sum % 101)
			if (checkDigit === 100) {
				checkDigit = 0
			}
		}
		if (checkDigit === parseInt(snils.slice(-2))) {
			isCorrect = true
		}
	}
	return isCorrect
}