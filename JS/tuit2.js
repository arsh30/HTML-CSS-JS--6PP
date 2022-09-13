// <---------- TYPE CONVERSION ---------------->

// WE CAN WRAPP IN ANY DATA TYPE - SO USS VARIABLE ME CHANGE HOJEGA
// 1. String or toString
// 2. Number
// 3.

// let a = 20;
// console.log(a);
// console.log(typeof String(a)); // Now Stirng me wrap krdiya isliye uska data type change hogya

// let b = "453";
// console.log(b);
// console.log(typeof Number(b));

// "toString" method to convert number into a string
// let a = 453;
// console.log(a, typeof a);
// console.log(a, typeof a.toString());

// <------------- STRING METHOD ----------------->

let s = "my name is abhi singh";
// console.log(s[4]); // start with 0 index square bracket ke andr jo index pass krege vo element mil jaega
// dot lgate sare methods aajege

console.log(s.indexOf("n")); // It gives the index number of first occurence of that element
console.log(s.lastIndexOf("n")); // it gives the index number of last occurenece of that element, It starts search from 0th index
console.log(s.charAt(11)); // we have to the pass the index number, and it give the the character of that position
console.log(s.includes("name")); // It gives true or false jo string paas krege vo btaega ki present hai ya nahi
console.log(s.substring(0, 4)); // substring means continue chracter dega -> starting index includes, ending index is not included
console.log(s.slice(0, 4)); // slice and substring method are same
console.log(s.split("a")); // means it return a new array - jo bhi pass krege uske behalf pr split krdega
// Eg: split means jidr jidr a aayega utna portion seperate hojega
console.log(s.replace("abhi", "Abhishek")); // it replace that character with the update value , 1st param is jisko replace krna hai ,2nd parameter updated value
console.log(s.length); // It gives the total length of that characters
console.log(s.toLowerCase()); // It convert whole string into lower character
console.log(s.toUpperCase()); // It convert whole string into caps letter
console.log(s.substr(3, 4)); // 2nd index is length, eg: 0 se start hoye 4 length ki substring dede














