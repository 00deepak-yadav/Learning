let arr = [-5, -3, 1, 2, 4, 7]

let result = []
let i = 0
let j = arr.length - 1
let index = arr.length - 1
while (i<=j) {
    let leftsquare = arr[i] * arr[i];
    let rightsquare = arr[j] * arr[j]
    if (leftsquare > rightsquare) {
        result[index]= leftsquare
        i++
    } else {
        result[index]= rightsquare
        j--
    }
    index --
}
console.log(result)