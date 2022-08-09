

// function abbrevName(name) {

//     let b = name.split('')
//     let abc = []
//     let redarr = b.map((el) => (el === el.toUpperCase() ? abc.push(el) : null))
//     return (abc[0] + "." + abc[2]).toUpperCase()
// }

// console.log(abbrevName('КешьЮ ИлАждлДЛАьин'))


// function abbrevName(name) {
//     let a = name.toUpperCase().split('', 1).toString()
//     let b = name.split(' ').slice(1)
//     b = b.toString().split('', 1).toString().toUpperCase()

//     return a + '.' + b

// }
// console.log(abbrevName('asdlkjASDj aslfkjASDK'));


// function solution(str) {
//     return str.split('').reverse().join('')
// }
// console.log(solution('world'));

// const solution = s => [{ ...s }]
// console.log(solution('world'));s

// let min = function (list) {

//     let b = Math.min(...list)

//     console.log(`min =` + " " + b);
// }

// min([-52, 56, 30, 29, -54, 0, -110])

// function noSpace(x) {
//     let b = []
//     let a = x.split("")
//     a.map(el => {
//         if (el !== ' ') {
//             b.push(el)
//         }

//     })
//     return b.join('')
// }


// console.log(noSpace('fhashf  kjh asfkjha ask jfha  ksj  fh'));


// function invert(array) {
//     let a = []
//     let b =
//         array.map((el) => {
//             if (el > 0) {
//                 a.push(el * (-1))
//             } else if (el < 0) {
//                 a.push(el * (-1))
//             } else {
//                 a.push(el)
//             }

//         }
//         )
//     return a
// }

// console.log(invert([1, 2, 0, 44, 2, -1]));


// function paperwork(n, m) {
//     return (n < 0 || m < 0) ? 0 : (n * m)


// }
// console.log(paperwork(-5, 5));
// function doubleChar(str) {
//     let a = []
//     let b = []
//     b = ([...str]).map(el => {
//         if (el === el) {
//             a.push([el])
//             a.push([el])
//         }
//     })
//     return a.join('')
// }


// console.log(doubleChar('hello'));

// function countPositivesSumNegatives(input) {
//     let a = []
//     let b = []
//     let result = 0
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] > 0) {
//             result += 1
//         }
//     }


//     let c = ([...input]).map(el => {
//         if (el < 0) {
//             a.push(-el)
//         }
//     })
//     let d = a.reduce((el, amount) => el + amount)
//     return [result, -d]
// }
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
// function findSmallestInt(args) {
//     let a = Math.min(...args)
//     return a
// }
// console.log(findSmallestInt([1, 2, 3, 4, 5]))
// var summation = function (num) {
//     let arr = [...Array(num).keys()].map(x => ++x)
//     let b = arr.reduce((el, amount) => el + amount)
//     return b


// }


// console.log(summation(3));

// function positiveSum(arr) {
//     if (arr.length === 0) {
//         return 0
//     } else {
//         let a = []
//         arr.map((el) => {
//             if (el > 0) { a.push(el) }

//         })
//         let b = []
//         let bsum = 0
//         for (i = 0; i < a.length; i++) {
//             bsum = bsum + a[i]

//         }
//         return bsum

//     }
// }




// console.log(positiveSum([1, 2, 5]))

function fakeBin(x) {
    let b = [...x]
    let a = []
    b.map((el) => {
        if (el > 4) {
            a.push(el = 1)
        } else if (el <= 4) {
            a.push(el = 0)
        }
    })
    return a.join('').toString()
}

console.log(fakeBin('45385593107843568'));

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}