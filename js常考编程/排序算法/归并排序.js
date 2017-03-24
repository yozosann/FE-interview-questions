function merge(left, right) {
    let isArray = Object.prototype.toString;
    if (isArray.call(left) !== '[object Array]' || isArray.call(right) !== '[object Array]') {
        return;
    }
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}

function mergeSort(arr) {  //采用自上而下的递归方法

    var len = arr.length;

    if (len < 2) {

        return arr;

    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));

}

var arr = [3, 44, 38, 5, 47, 15, 36, 32, 26, 27, 2, 4, 46, 19, 50, 48];
console.log(mergeSort(arr));