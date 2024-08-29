// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
const temperatures1 = [17, 21, 23]
const temperatures2 = [12, 5, -5, 0, 4]

const printForecast = (temperatures) => {
    var str = '';
    for (let i = 0; i < temperatures.length; i++) {
        str += `... ${temperatures[i]}ºC in ${i + 1} days `
    }
    return str
}
console.log(printForecast(temperatures1))
console.log(printForecast(temperatures2))
