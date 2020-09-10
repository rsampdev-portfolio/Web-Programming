function validate(num) {
    try {
        if (typeof (num) !== 'number') {
            throw new TypeError(`The value ${num} is not a number`);
        }
        
        console.log(`The value ${num} is valid.`);
    } catch (err) {
        console.log(err.message);
    }
}

const numbers = [1, 2, 'banana', 4, 'orange', 5];
numbers.forEach(function (val) {
    validate(val);
});