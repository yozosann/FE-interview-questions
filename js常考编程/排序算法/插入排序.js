//最差O(n2) 平均O(n2) 稳定 空间O(1)
function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let val = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > val) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = val;
    }
    return arr;
}

// 二分法优化
function binaryInsertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let val = arr[i];
        let left = 0, right = i - 1;
        while (left <= right) {
            let middle = Math.floor((left + right) / 2) ;
            if (val < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for (let j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = val;
    }
    return arr;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 32, 26, 27, 2, 4, 46, 19, 50, 48];
console.log(binaryInsertionSort(arr));