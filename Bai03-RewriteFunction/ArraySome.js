Array.prototype.someFn = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true
        }
    }
    return false;
}

const arr1 = [1, 3, 5, 7, 9];
console.log(arr1.someFn(e => e % 2 === 0))

const arr2 = [1, 3, 5, 7, 9, 12];
console.log(arr2.someFn(e => e % 2 === 0))