Array.prototype.mapFn = function (callback) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        let count = callback(this[i])
        newArr.push(count)
    }
    return newArr
}

const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 52]
arr2 = arr.mapFn(e => e ** 2)

console.log(arr2)