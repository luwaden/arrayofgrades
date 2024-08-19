const stGrades = [70, 60, 45, 10, 32, 100, 57, 30]

//1)
stGrades.push(4)
console.log(stGrades);
//56 was added to the grade
// [
//     70, 60, 45, 10, 32,
//    100, 56, 30, 56
//  ]

//2)
stGrades.pop()
 console.log(stGrades);
// 56 was removed from the grade
// [
//     70,  60, 45, 10,
//     32, 100, 56, 30
//   ]

// 
 stGrades.unshift()
console.log(stGrades);
//98.5 was added to the beginning of the grade
// [
//     98.5, 70,  60, 45,
//       10, 32, 100, 57,
//       30
//   ]

stGrades.unshift()
console.log(stGrades);
//98.5 was removed from the beginning of the grade
// [
//     70,  60, 45, 10,
//     32, 100, 57, 30
// ]


//3)
 stGrades.splice(1, 3, "prox", 'ayodeji')
console.log(stGrades);
// number 60, 10, and 45 was removed from the array replaced with "prox" and "ayodeji"
//[ 70, 'prox', 'ayodeji', 32, 100, 57, 30 ]

let newGrade = [70, 60, 45, 10, 32, 100, 57, 30]
let sliceGrade = newGrade.slice(2, 3)
console.log(sliceGrade);
// sliceGrade is new array extracted from newGrade after slice method
//[ 45 ]

// 4)
let grade_one = [ 32, 100, 57, 30]
let grade_two = [ 70, 60, 45, 10, 55]

let concatGrade = grade_one.concat(grade_two);
console.log(concatGrade);
//grade-one and grade_two was joined together into one array
// [
//     32, 100, 57, 30,
//     70,  60, 45, 10, 55
//   ]

let joinGrade =grade_one.join() 
console.log(joinGrade);
// grade_one was merged into one data includig the comma by default


//5)
let reverseGrade = grade_two.reverse();
console.log(grade_two);
// grade_two was reverse from the last position of the array to the beginning

let sortGrade = grade_two.sort();
console.log(sortGrade);
// this will sort the array in ascending order



//6)
let forEachGrade = grade_one.forEach(function (number){
    console.log(number);  
})
// ecah number was printed out on the console
// 32
// 100
// 57
// 30


let mapGrade = grade_one.map(function (number){
    return number*5; 
})
console.log(mapGrade);
// each number was multiplied by 5 through the .map method 
// [ 160, 500, 285, 150 ]


//7)
let filterGrade = grade_one.filter(function (number){
    if (number>= 70) {
        return number;
    } else {
        console.log(`you scored ${number}`)
    }
})
console.log(filterGrade);
//the filterGrade variable filterd out number above 70
// if & else statement development was used 

arrayGrade = [85, 92, 78, 88, 90, 67, 95]

let reduceGrade = arrayGrade.reduce(function(acc, curr) {
    return acc + curr
}, 0)
console.log(reduceGrade);
//used reduce method to add up all the grades in the array



let findGrade = arrayGrade.find(function (number) {
    return number === 88
})
console.log(findGrade);
//using find method to check if number 88 is in the array


let findIndexGrade = arrayGrade.findIndex(function (number) {
    return number < 70;
})
console.log(findIndexGrade);
//used findIndex method to check if number less than 7 is in the array

let someGrade = arrayGrade.some(function (number) {
    return number < 60;
})
console.log(someGrade);
//used some method to check if number less than 60 is in the array

let everyGrade = arrayGrade.some(function (number) {
    return number < 50;
})
console.log(everyGrade);
//used every method to check if number less than 50 is in the array


//8)
let includeGrade = arrayGrade.includes(34) 
console.log(includeGrade);

//used includes to check if 38 is in the array





