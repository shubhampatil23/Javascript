'use strict';

//strings
//find length of strings
//string concatenation
//template string
//escape character
//sring indexing
//string slicing
//useful string method



// 1] string

// there ways we can use string =>  '', "" , ``
// single quotes, double quotes, and back ticks
// Using back stick we write in multiple line code

//let firstName = 'shubham';
//let lastName = "patil";
//let fullName = `shubham patil
//and i live in maharashtra`;
//
//console.log(firstName)
//console.log(lastName)
//console.log(fullName)


// 2] find length of strings
// space in string is also counted

//let firstName = 'shubham';
//let lastName = "patil";
//console.log(firstName.length);
//console.log(lastName.length);

// store in another variable

//let strLen1 = firstName.length;
//let strLen2 = lastName.length;
//console.log(strLen1);
//console.log(strLen2);


// 3] string concatenation

//let firstName = 'shubham';
//let lastName = "patil";
//let age = 25;
//let newstr = "I am " + firstName + " and i am " + age + " years old";
//console.log(newstr);
//console.log(newstr.length);



// 4] string concatenation USING Templates :

//let firstName = 'shubham';
//let lastName = "patil";
//let age = 25;
//let strLen = `I am ${firstName} and i am ${age} year old`
//let strLen = `I am ${firstName} ${lastName} and i am ${age} year old`
//console.log(strLen)


// 5] Escape character / Escape Sequence

// i want output as => I'm shubham
// so used backslash and single qout this is a escape charcter.

//  =>  \', \" , \n , \t

//let newStr = 'I\'m shubham';
//console.log(newStr);

//let newStr = "Happiness is real \n when shared"
//console.log(newStr)


// 6] String Indexing:

//let firstName = 'shubham';
//let newStr = firstName[0];

// find last letter
//let firstName = 'shubham';
//let newStr = firstName[firstName.length-1];
//console.log(newStr);

// 7] Slicing  and substr

//let firstName = 'shubham';
//let newStr = firstName.slice(0,4);
//let newSlice = firstName.slice(1);
//console.log(newStr);
//console.log(newSlice);

//let firstName = 'shubhampatil';
//let newStr = firstName.substr(0,5);
//let newSlice = firstName.substr(1,8);
// WE CAN ALSO GIVE => substring(0,8);
//console.log(newStr);
//console.log(newSlice);

// make letter to small letters
//let firstName = 'SHUBHAMPATIL';
//let newStr = firstName.toLowerCase();
//console.log(newStr);

// Make letter to small letters TO CAPITAL
//let firstName = 'shubhampatil';
//let newStr = firstName.toUpperCase();
//console.log(newStr);























