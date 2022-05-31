// let number = max(10, 14);
// console.log(number);

// function max(x, y) {
//     return (x > y) ? x : y;
// }

// landscape = isLandscape(400, 600);
// console.log(landscape)

// function isLandscape(width, height) {
//     return (width > height);
// }

// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return NaN;

//     if ((input % 3 === 0) && (input % 5 === 0))
//         return "FizzBuzz";


//     if (input % 3 == 0)
//         return "Fizz";

//     if (input % 5 == 0)
//         return "Buzz";


//     return input;

// }

// Speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> license suspended


// check = checkSpeed(90);

// function checkSpeed(speed) {
//     const speedlimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedlimit + kmPerPoint) {
//         console.log("Ok");
//         return
//     }

//     const points = Math.floor(speed - speedlimit) / kmPerPoint;
//     if (points >= 12)
//         console.log("license suspended");
//     else
//         console.log("Points: ", points);
// }

// showNumber(40);

// function showNumber(limit) {
//     for (i = 0; i <= limit; i++) {
//         const message = (i % 2 == 0) ? 'EVEN' : 'ODD';
//         console.log(i, message);
//     }
// }

// function showNumber(limit) {
//     let i = 0;
//     while (i <= limit) {
//         if (i % 2 == 0)
//             console.log(i, "EVEN");
//         if (i % 2 == 1)
//             console.log(i, "ODD");
//         i++;
//     }
// }

// let name = [null, undefined, 0, '', 1, "TWO"];
// if (typeof name[0] == false)
//     console.log(name);

// const array = [0, null, '', 1, 2, 'name'];

// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array)
//         if (value)
//             count++;
//     return count;
// }

// let hour = 10;

// if (hour >= 6 && hour < 12) {
//     console.log("Good mornining");
// }
// else if (hour >= 12 && hour < 18) {
//     console.log('"Good Afternoon');
// }
// else {
//     console.log("Good Evening");

// let x = 5;
// let y = 7;

let maxNum = max(20, 9);
console.log(maxNum);

let max = function(x, y) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
};

