class StringCalculator {
	add(numbers: string): number {
		if (!numbers) return 0;

		let delimiter = /,|\n/;
		if (numbers.startsWith("//")) {
			const [delimiterPart, numberPart] = numbers.split("\n", 2);
			delimiter = new RegExp(delimiterPart.slice(2));
			numbers = numberPart;
		}

		const numList = numbers.split(delimiter).map((n) => parseInt(n.trim(), 10));
		const negatives = numList.filter((n) => n < 0);

		if (negatives.length) {
			throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
		}

		return numList.reduce((sum, n) => sum + (isNaN(n) ? 0 : n), 0);
	}
}

export default StringCalculator;
