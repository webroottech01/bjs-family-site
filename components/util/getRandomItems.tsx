export const getRandomItems = (arr: any[], num = 15) => {
    const randomArr = [];
    for (let i = 0; i < num;) {
        const random = Math.floor(Math.random() * arr.length);
        if (randomArr.indexOf(arr[random]) !== -1) {
            continue;
        };
        randomArr.push(arr[random]);
        i++;
    };
    return randomArr;
}