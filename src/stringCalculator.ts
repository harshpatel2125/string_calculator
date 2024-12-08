class StringCalculator {
	add(numbers: string): number {
		if (!numbers) return 0;
		return numbers.split(/,|\n/).reduce((sum, n) => sum + parseInt(n, 10), 0);
	}
}

export default StringCalculator;
