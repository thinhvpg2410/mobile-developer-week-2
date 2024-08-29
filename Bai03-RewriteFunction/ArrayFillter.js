Array.prototype.filterFn = function (callback) {
    var newArr = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArr.push(this[i])
        }
    }
    return newArr;
}

const arr = [1, 20, 29, 65, -5, 8, 14, 18, 36, 49, 50, -10];
var result = arr.filterFn(i => i > 20)
console.log(result)