const arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i + 1;
}
function getIndex() {
    return Math.floor(Math.random() * 100);
}
function randomArr(arr) {
    let m, n, temp;
    for (let i = 0; i < 100; i++) {
        m = getIndex();
        n = getIndex();
        temp = arr[m];
        arr[m] = arr[n];
        arr[n] = temp;
    }
}
randomArr(arr)
console.log(arr);