Array.prototype.reduceFn = function (callback, init) {
    var result = 0
    for (let i = 0; i < this.length; i++) {
        callback(result = result + this[i])
    }
    return result
}

const arr = [1, 20, 29, 65, -5, 8, 14, 18, 31, 49, 50, -10];
var result = arr.reduceFn((total, val) => total + val, )
console.log(result)
