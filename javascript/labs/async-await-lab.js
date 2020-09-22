function getNumber(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n), 500);
    });
}

const getX = () => getNumber(3);
const getY = () => getNumber(5);
const getZ = () => getNumber(2);

// TODO: Make the following function `async` and replace the nested `.then` calls with
//      `await` statements that assign to local variables.
//      The result should still be the same, logging out the sum of `10`
// HINT: With the `await` statements, there is no need for any nesting.
function sumData() {
    return getX().then(x => {
        return getY().then(y => {
            return getZ().then(z => {
                console.log(x + y + z);
            });
        });
    });
}

sumData();