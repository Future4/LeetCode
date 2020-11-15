//1.冒泡排序
const arr = [6, 3, 4, 8, 9, 2, 1, 5, 7, 10]
function mySort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {


        for (let j = 0; j < len - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
    return arr
}

mySort(arr)


//2.选择排序
const arr = [6, 3, 4, 8, 9, 2, 1, 5, 7, 10]
function mySort(arr) {
    let len = arr.length;
    let minIndex
    for (let i = 0; i < len; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // temp = arr[minIndex]
        // arr[minIndex] = arr[i]
        // arr[i] = temp
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    console.log(arr)
    return arr
}

mySort(arr)

