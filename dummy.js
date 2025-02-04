//MY FIRST CHALLENGE IN JAVASCRIPT
// BODY MASS INDEX
//BMI = MASS / HEIGHT IN SQUARE

const joseMass = 65;
const ragavMass = 55;
const joseHeight = 2.10;
const ragavHeight = 1.89;

const bmijose = joseMass / joseHeight ** 2;
const bmiragav = ragavMass / ragavHeight ** 2;

console.log(bmijose, bmiragav);

if (bmijose > bmiragav) {
    console.log("Jose's BMI is greater");
} else {
    console.log("Ragav's BMI is greater");
}

// strings example

const student1 = 'Jose';
const student2 = 'nivedha';
const student3 = 'ragav';
const student4 = 'keerthi';

// in normal way
console.log(student1 + ' is male' + ' , ' + student2 + ' is female' + ' , ' + student3 + ' is male' + ' , ' + student4 + ' is female');

// in efficient way
console.log(`${student1} is 18 years old , ${student2} is 18 years old , ${student3} is 18 years old , ${student4} 18 years old `);

// if , else condition

var windSpeedInMeter = 68;
windSpeedInMeter = 89;

if (windSpeedInMeter > 0 & windSpeedInMeter < 50) {
    console.log("No alert");
}
if (windSpeedInMeter > 25 & windSpeedInMeter < 50) {
    console.log("Yellow alert");
}
if (windSpeedInMeter > 50 & windSpeedInMeter < 75) {
    console.log("Orange alert");
}
else {
    console.log("Red alert");
}

//type conversion
const birthyear = '2007';
const myage = 18;

console.log(birthyear + myage);
// ^ above code is in wrong manner

// using type conversion
console.log(Number(birthyear) + myage);

//type coercion
//Using + numbers are converted to strings
console.log('my birth year ' + birthyear + ' + my age ' + myage + ' is the ' + 'current year which is ' + 2025);

// Using - strings are converted to numbers

console.log('2025' - 10 - '8');

// truthy and falsy : falsy values are 0,undefined,'',{}

var fuel_ml = 0;

if (fuel_ml = 0) {
    console.log('fill the fuel tank');
}
else {
    console.log('use it carefully');
}

