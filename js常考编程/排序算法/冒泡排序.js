//最差O(n2) 平均O(n2) 稳定 空间O(1)

function bubbleSort(arr) {
    var low = 0;
    var high = arr.length - 1;
    var temp, j;
    while (low < high) {
        for (j = low; j < high; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
        high--
        for (j = high; j > low; j--) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
        low++
    }
    return arr;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 32, 26, 27, 2, 4, 46, 19, 50, 48];
console.log(bubbleSort(arr));