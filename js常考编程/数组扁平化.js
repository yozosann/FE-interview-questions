function flat(arr, result) {
    let len = arr.length, d;
    for (let i = 0; i < len; i++) {
        d = arr[i];
        if (typeof d === 'number') {
            result.push(d);
        } else {
            flat(d, result)
        }
    }
}

const result = [];
const arr = [1, [2, [[3, 4], 5], 6]];
flat(arr, result);
console.log(result);