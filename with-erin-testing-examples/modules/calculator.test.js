import calc from "./calculator.js"

describe("#add", () => {
    describe("Given two numbers are passed", () => {
        describe("When both numbers are positive: 10 and 10", () => {
            it("Should return 20", () => {
                expect(calc.add(10, 10)).toBe(20);
            });
        });
        describe("When both numbers are negative: -10 and -10", () => {
            it("Should return -20", () => {
                expect(calc.add(-10, -10)).toBe(-20);
            });
        });
        describe("When one number is positive and the other is negative: 10 and -10", () => {
            it("Should return 0", () => {
                expect(calc.add(10, -10)).toBe(0);
            });
        });
        describe("When one number is 0 and the other is not: 0 and 10", () => {
            it("Should return 10", () => {
                expect(calc.add(0, 10)).toBe(10);
            });
        });
        describe("When both numbers are zero: 0 and 0", () => {
            it("Should return 0", () => {
                expect(calc.add(0, 0)).toBe(0);
            });
        });
    });
});