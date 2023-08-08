export function analyzeArray(array) {

    function min(arr = array.slice(), minN = arr.shift()) {
        if (arr.length == 0) return minN
        arr[0] < minN ? minN = arr.shift() : arr.shift()
        return min(arr, minN)
    }

    function max(arr = array.slice(), maxN = arr.shift()) {
        if (arr.length == 0) return maxN
        arr[0] < maxN ? arr.shift() : maxN = arr.shift()
        return max(arr, maxN)
    }
    return {
        average: Math.floor(array.reduce((previous, current) => previous + current, 0) / 2),
        min: min(),
        max: max(),
        length: array.length,
    }
}
