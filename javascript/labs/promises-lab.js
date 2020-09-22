function getData(callback) {
    const data = [1, 2, 3];
    setTimeout(() => callback(data), 1000);
}

getData(function (data) {
    const sum = data.reduce((a, b) => a + b, 0);
    console.log(sum);
});