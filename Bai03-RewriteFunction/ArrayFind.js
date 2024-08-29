Array.prototype.findFn = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i]
        }
    }
    return undefined;
}
const arr = [10, 15, 18, 19, 26, 49]
console.log(arr.findFn((val) => val > 20))
console.log(arr.findFn((val) => val > 100))
console.log(arr.findFn((val) => val % 2 !== 0))
