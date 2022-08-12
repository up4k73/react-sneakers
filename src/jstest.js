

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

// function fakeBin(x) {
//     let b = [...x]
//     let a = []
//     b.map((el) => {
//         if (el > 4) {
//             a.push(el = 1)
//         } else if (el <= 4) {
//             a.push(el = 0)
//         }
//     })
//     return a.join('').toString()
// }

// console.log(fakeBin('45385593107843568'));

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// function reverseWords(str) {
//     return [...str].reverse().join('')

// }



// function reverseWords(str) {
//     return str.split(" ").map(
//         function (a) { return a.split("").reverse().join("") }
//     ).join(" ");
// }
// console.log(reverseWords("sh  ow"));



// let toJadenCase = function (str) {
//     let b = []
//     str.split(' ').map(el => el[0] === el[0].toUpperCase() ? b.push(el) : b.push(el[0].toUpperCase()))
//     return b
// };

// let toJadenCase = function (str) {

//     return str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')

// };

// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))
// function digitize(n) {
//     return n.toString().split('').reverse().map(el => Number(el))
// }
// console.log(digitize(1234));,

// function openOrSenior(data) {
//     let b = []
//     data.map(el => {
//         if (el[0] > 54 && el[1] > 7) {
//             b.push('Senior')
//         } if (el[0] < 55 && el[1] < 7) {
//             b.push('Open')
//         }
//     })
//     return b
// }

// function openOrSenior(data) {
//     let b = []
//     data.map(el => (el[0] > 54 && el[1] > 7) ? b.push('Senior') : b.push('Open'))
//     return b
// }


// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));



// function greet(name) {
//     console.log(`Hello, ${name} how are you doing today?`)
// }


// greet('Ryan')

// function dress(a, b) {
//     let min = Math.Min(a, b)
//     let max = Math.Max(a, b)
//     let sum = max
//     for (i = min; i < max; ++i) {
//         sum += i
//     }
//     return sum;

// }
// dress(1, 10)

// function getCount(str) {
//     let a = []
//     str.split("").map(el => {
//         if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u")

//             a.push(el)

//     })

//     return console.log(a.length)
// }

// getCount("pear tree")

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }

// let arr = []

// arr.map(el => el > Math.min(...arr) ? arr.push(el) : null)

// return arr


// function removeSmallest(numbers) {
//     let arr = []
//     let minElem = Math.min(...numbers)


//     numbers.map((el, index) => (el, index > minElem, index) ? arr.push(el, index) : null)

//     return arr
// }

// console.log(removeSmallest([2, 2, 1, 2, 1]));

// function repeatStr(n, s) {
//     let arr1 = []
//     let arr = [...Array(n + 1)]
//     arr.map((el, index) => index ? arr1.push(s) : null)


//     return arr1.join("")
// }

// console.log(repeatStr(3, "ha "));

// function getCount(str) {
//     return str.replace(/[^bcdfghjklmnpqrstwxz! ]/gi, '');
// }

// console.log(getCount("This is yous last day motherfucker"));


// function getCount(str) {
//     let a = []
//     str.split("").map(el => {
//         if (el === "b" || el === "c" || el === "d" || el === "f" || el === "g")

//             a.push(el)

//     })

//     return a.length
// }


// function smash(words) {
//     let arr = []
//     words.map(el => arr.push(el + ' '))
//     return arr.join('').trim()
// };

// console.log(smash(['hello', 'world', 'this', 'is', 'great']))


// function SeriesSum(n) {

//     let a = Math.floor(n * 100) / 100
//     return a.toFixed(2).toString()
// }

// console.log(SeriesSum(1));
// function greet(name, owner) {
//     let a = name === owner ? 'hello boss' : 'hello guest'
//     return a
// }

// console.log(greet('vvv', 'vvv'));

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return fuelLeft * mpg >= distanceToPump ? true : false
// }
// function highAndLow(numbers) {
//     let ar = []

//     let arr = numbers.split(' ').map(el => ar.push(el))


//     return String(Math.max(...ar) + ' ' + (Math.min(...ar)))
// }


// console.log(highAndLow("1 2 3 4 5 -49"));


// function removeChar(str) {
//     let arr = [...str]
//     arr.pop()
//     arr.shift()
//     return arr.join('')


// };

// console.log(removeChar('eloquent'));!!!!!

// const reverseSeq = n => {
//     return [...Array(n).keys()].map(x => ++x).reverse()!!!!!!!!!!!!!!!!!!!!!!!
// };

// console.log(reverseSeq(5));

// function solution(str, ending) {
//     return str.endsWith(ending)
// }


// console.log(solution("быть", "ыть"));

// function countSheeps(arrayOfSheep) {
//     const arr = []
//     arrayOfSheep.map(el => {
//         if (el === true) {
//             arr.push(el)
//         }
//     })
//     return arr.length
// }

// let x = () => "hello world"
// function points(games) {
//     let sum = 0;
//     for (let i = 0; i < games.length; ++i) {
//         if (games[i][0] > games[i][2])
//             sum += 3;
//         if (games[i][0] == games[i][2])
//             sum += 1;
//     }
//     return sum;
// }

// console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));

// complete the function
// Sum Numbers
// function sum(numbers) {
//     return numbers.reduce((p, c) => p + c, 0)


// };
// console.log(sum([]));

// function getGrade(s1, s2, s3) {
//     let score = ((Number(s1) + Number(s2) + Number(s3)) / 3)

//     if (score <= 100) {
//         return ('A')
//     } else if (80 <= score < 90) {
//         return ('B')
//     } else if (70 <= score < 80) {
//         return ('C')
//     } else if (60 <= score < 70) {
//         return ('D')
//     } else if (0 <= score < 60) {
//         return ('F')
//     }


// }

// console.log(getGrade(10, 20, 10));

// function setAlarm(employed, vacation) {

//     return !(vacation && employed)

// }
// console.log(setAlarm(false, false));

// function rentalCarCost(d) {
//     if (d > 1 && d <= 2) {
//         return d * 40
//     }

//     else if (d >= 3 && d <= 6) {
//         return ((d * 40) - 20)
//     }

//     else {
//         return (d * 40) - 50
//     }
// }

// console.log(rentalCarCost(8));

// function sumArray(array) {
//     let arr = []
//     let arr2 = array.map(el =>
//         (el === Math.min(array) || el === Math.max(array)) ? null : arr.push(el)

//     )
//     return arr.reduce((c, p) => c + p, 0)
// }
// function sumArray(array) {
//     let arr = []
//     if (array !== null && array.length > 2) {
//         array.map(el =>
//             (el === Math.min.apply(null, array) || el === Math.max.apply(null, array)) ? null : arr.push(el)

//         )
//     } else { return 0 }
//     return arr.reduce((c, p) => c + p, 0)
// }

// console.log(sumArray([0, 1, 6, 10, 10]));

// const rps = (p1, p2) => {
//     if (p1 === p2) {
//         return 'Draw!'
//     } else if (p1 === ('scissors') && p2 === ('rock')) {
//         return 'player 2 win'
//     } else if (p1 === ('rock') && p2 === ('scissors')) {
//         return 'player 1 win'
//     } else if (p1 === ('scissors') && p2 === ('rock')) {
//         return 'player 1 win'
//     } else if (p1 === ('scissors') && p2 === ('rock')) {
//         return 'player 1 win'
//     } else if (p1 === ('scissors') && p2 === ('rock')) {
//         return 'player 1 win'
//     } else if (p1 === ('scissors') && p2 === ('rock')) {
//         return 'player 1 win'
//     } else if (p1 === ('scissors') && p2 === ('rock')) {
//     }
// };


// const rps = (p1, p2) => {
//     let result
//     switch (p1 + p2) {
//         case 'rockscissors':
//         case 'scissorspaper':
//         case 'paperrock':
//             result = 'player 1 win'
//             break;
//         case 'scissorsrock':
//         case 'paperscissors':
//         case 'rockpaper':
//             result = 'player 2 win'
//             break;
//         case 'scissorsscissors':
//         case 'paperpaper':
//         case 'rockrock':
//             result = 'Draw!'
//             break;







//         default:
//             break;
//     }
//     return result

// };

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
//     if (p2 === rules[p1]) {
//         return "Player 1 won!";
//     }
//     else {
//         return "Player 2 won!";
//     }
// };

// // console.log(rps('scissors', 'paper'));


// // var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
// // console.log(rules['scissors']);


// function removeEveryOther(arr) {
//     return arr.filter((_, index) => index % 2 === 0) //your code here
// }

// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// function removeExclamationMarks(s) {
//     let newArr = []
//     s.split('').map((el) => {
//         if (el !== '!') {
//             newArr.push(el)
//         }
//     })

//     return newArr.join('')

// }

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

console.log(removeExclamationMarks("Hello World!"));