function findMinAndRemoveSorted(arr) {
    return arr.shift()
}

function merge(firstArr, secondArr) {
    const sorted = []
    while (firstArr.length !==0 && secondArr.length !== 0) {
        if (firstArr[0] < secondArr[0]) {
            sorted.push(findMinAndRemoveSorted(firstArr))
        } else {
            sorted.push(findMinAndRemoveSorted(secondArr))
        }
    }
    return sorted.concat(firstArr).concat(secondArr)
}

function mergeSort(array) {
    let midpoint = array.length/2
    let first = array.slice(0, midpoint)
    let second = array.slice(midpoint, array.length)
    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(first), mergeSort(second))
    }
}
