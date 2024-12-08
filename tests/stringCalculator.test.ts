import StringCalculator from "../src/stringCalculator";

describe("StringCalculator", () => {
	let calculator: StringCalculator;
	beforeEach(() => {
		calculator = new StringCalculator();
	});

	it("should return 0 for an empty string", () => {
		expect(calculator.add("")).toBe(0);
	});

	it("should return the number itself if the input is a single number", () => {
		expect(calculator.add("1")).toBe(1);
	});

	it("should return the sum of two numbers separated by a comma", () => {
		expect(calculator.add("1,2")).toBe(3);
	});
});
