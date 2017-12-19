
//Individual Exercise 1

function barEntry(age) {
    if (age >= 18) {
        alert('You can have a drink - Cheers!');
    } else {
        alert('Sorry you are too young to drink');
    }
}
barEntry(18)


//Individual Exercise 2

function entry() {
    var citizenship = prompt('which type of passport do you have?');
    if (citizenship === 'Israeli') {
        alert('you can pass')
    } else {
        alert('access denied');
    }
}
//Individual Exercise 3

function ladiesNight() {
    var gender = prompt("what is your gender?");
    var age = prompt("what is your age?");
    if (gender === 'female' && age >= 18) {
        alert('you get a free drink!');
    } else if (age < 18) {
        alert('sorry you cant drink any alcoholic drinks');
    } else if (gender === 'male' && age >= 18) {
        alert('you can drink bu have to pay');
    }
}

//for loop challenge


for (var number = 0; number <= 1000; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}


// Fizz Buzz Challenge

function fizzBuzz() {
    for (var number = 0; number <= 20; number++) {
        if (number % 5 === 0) {
            console.log('fizz');
        } else if (number % 3 === 0) {
            console.log("buzz");
        } else if (number % 5 === 0 && number % 3 === 0) {
            console.log("fizzbuzz");
        }
    }
}

// JS part 2 - PARTNER EXERCISE 1

var restaurants = ['oshi oshi', 'jems', 'Biga', 'oved bkfar'];
for (var i = 0; i <= restaurants.length; i++) {
    console.log(restaurants[i]);
}

//PARTNER EXERCISE 2

var myArray = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55,
    1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91,
    25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86,
    38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
var sum = 0;
for (var i = 0; i < myArray.length; i++) {
    sum += myArray[i];

    var avg = sum / myArray.length;
}

alert(avg);

//PARTNER EXERCISE 3

var myColor = ["Red", "Green", "White", "Black"];

myColor.join(" + ");


//PARTNER EXERCISE 4



function evenNums(num) {
    var myString = num.toString();
    var result = [myString[0]];
    for (var i = 1; i < myString.length; i++) {
        if ((myString[i - 1] % 2 === 0) && (myString[i] % 2 === 0)) {
            result.push('-', myString[i]);
        }
        else {
            result.push(myString[i]);
        }
    }
    console.log(result.join(''));

}
evenNums(22114653);


//PARTNER EXTENSION 1 (OPTIONAL)

var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var occurences = {};
var curElement;
var maxElement = array[0];
for (let i = 0; i < array.length; i++) {
    curElement = array[i];
    if (occurences[curElement] !== undefined) {
        occurences[curElement]++;
    } else {
        occurences[curElement] = 1;
    }
    if (occurences[curElement] > occurences[maxElement]) {
        maxElement = curElement;
    }
}
if (occurences[maxElement] > array.length / 2) {
    console.log; maxElement;
}
console.log; maxElement;

//PARTNER EXTENSION 2 (OPTIONAL)


var numArray = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193,
    55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133]

function absent(arr) {
    var mia = [], min = Math.min.apply('', arr), max = Math.max.apply('', arr);
    while (min < max) {
        if (arr.indexOf(++min) == -1) mia.push(min);
    }
    return mia;
}
absent(numArray);