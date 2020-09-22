import calc from "./calculator.js"

describe("#add", () => {
    describe("Given two numbers are passed", () => {
        describe("When the numbers are 2 and 100", () => {
            it("Should return 102", () => {
                expect(calc.add(2, 100)).toBe(102);
            });
        });
        describe("When the number are -1 and 50", () => {
            it("Should return 49", () => {
                expect(calc.add(-1, 50)).toBe(49);
            });
        })
    });
});