function getData() {
    const data = [1, 2, 3];

    return new Promise(resolve => {
        const sum = data.reduce((a, b) => a + b, 0);
        console.log(sum);
        resolve(sum);
    });
}

getData().then();