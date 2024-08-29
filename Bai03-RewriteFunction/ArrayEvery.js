Array.prototype.everyFn = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false
        }
    }
    return true
}

const arr = [10, 15, 18, 19, 26, 49]

console.log("all >20: ",arr.everyFn((num) => num > 20))
console.log("all >5: ",arr.everyFn((num) => num > 5))
console.log("all <50: ",arr.everyFn((num) => num < 50))
console.log("all <30: ",arr.everyFn((num) => num < 30))