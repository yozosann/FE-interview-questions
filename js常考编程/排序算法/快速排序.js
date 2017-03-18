function quickSort(arr, left, right) {
    if (left < right) {
        let key = arr[left];
        let low = left, high = right;
        while (low < high) {
            while (low < high && arr[high] > key) {
                high--;
            }
            arr[low] = arr[high];
            while (low < high && arr[low] < key) {
                low++;
            }
            arr[high] = arr[low];
        }
        arr[low] = key;
        quickSort(arr, left, low - 1);
        quickSort(arr, low + 1, right);
        return arr;
    }
}

var arr = [3, 44, 38, 5, 47, 15, 36, 32, 26, 27, 2, 4, 46, 19, 50, 48];
console.log(quickSort(arr, 0, arr.length - 1));