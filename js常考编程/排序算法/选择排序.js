//最差O(n2) 平均O(n2) 稳定 空间O(1)

function selectionSort(arr) {
    let len = arr.length;
    let minIndex, temp;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 32, 26, 27, 2, 4, 46, 19, 50, 48];
console.log(selectionSort(arr));