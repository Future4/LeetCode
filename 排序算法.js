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
//首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。 
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

//3.插入排序
//通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

const arr = [6, 3, 4, 8, 9, 2, 1, 5, 7, 10]
function mySort(arr) {
    let len = arr.length;
    let prevIndex, current
    for (let i = 1; i < len; i++) {
        prevIndex = i - 1
        current = arr[i]

        while (current < arr[prevIndex] && prevIndex >= 0) {
            arr[prevIndex + 1] = arr[prevIndex];
            prevIndex--;
        }
        arr[prevIndex + 1] = current
    }
    console.log(arr)
    return arr
}
mySort(arr)

//4.希尔排序
//它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。

const arr = [6, 3, 4, 8, 9, 2, 1, 5, 7, 10]
function mySort(arr) {

}
mySort(arr)
//5.归并排序

const arr = [6, 3, 4, 8, 9, 2, 1, 5, 7, 10]
function mySort(arr) {

}
mySort(arr)


//5.快速排序

//首先选一个临界值，小于临界值的放数组前面，大于临界值的放后面，这样就形成一个数组【前半部分，后半部分】
//然后递归 前半部分 和 后半部分

const arr = [6, 3, 4, 8, 9, 2, 1, 5, 7, 10]
const arr2 = [6, 3, 4, 2, 1, 5, 9, 8, 7, 10]
function mySort(arr, left, right) {
    let partitionIndex;
    let len = arr.length
    left = typeof left != 'number' ? 0 : left
    right = typeof right != 'number' ? len - 1 : right

    if (left < right) {
        partitionIndex = partition(arr, left, right)
        mySort(arr, left, partitionIndex - 1)
        mySort(arr, partitionIndex + 1, right)
    }
    return arr
}

function partition(arr, left, right) {
    let pivot = left;
    let index = pivot + 1

    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1)
    return index - 1
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
mySort(arr)




//插入排序
const arr = [6, 3, 4, 8, 9, 2, 1, 5, 7, 10]
function mySort(arr) {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        let prev = i - 1
        let current = arr[i]

        while (prev >= 0 && current < arr[prev]) {
            arr[prev + 1] = arr[prev]
            prev--;
        }
        arr[prev + 1] = current
    }
    return arr
}

console.log(mySort(arr))

//快速排序
const arr = [6, 3, 4, 8, 9, 2, 1, 5, 7, 10]
function mySort(arr, left, right) {
    let len = arr.length
    left = typeof left == 'number' ? left : 0
    right = typeof right == 'number' ? right : len - 1

    if (left < right) {
        let resIndex = main(arr, left, right)
        left = mySort(arr, left, resIndex - 1)
        right = mySort(arr, resIndex + 1, right)
    }
    return arr
}

function main(arr, left, right) {
    let pivot = left
    let index = pivot + 1
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            exChange(arr, i, index)
            index++
        }
    }
    exChange(arr, pivot, index - 1)
    return index - 1
}
function exChange(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(mySort(arr))
