class StringCalculator {
	add(numbers: string): number {
		if (!numbers) return 0;

		let delimiter = /,|\n/;
		if (numbers.startsWith("//")) {
			const [delimiterPart, numberPart] = numbers.split("\n", 2);
			delimiter = new RegExp(delimiterPart.slice(2));
			numbers = numberPart;
		}

		return numbers.split(delimiter).reduce((sum, n) => sum + parseInt(n, 10), 0);
	}
}

export default StringCalculator;
