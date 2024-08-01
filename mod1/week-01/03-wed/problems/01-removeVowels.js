
/*

write a function called removeVowels. It will take in a string of text that may or may not include vowels.
Vowels are defined as "a", "e", "i", "o", "u".

The function should return a string with all the vowels removed.

Example:

input -> "hello"
output -> "hllo"

Example2:

input -> "GOOD bye"
output -> GD by"


Try to solve this in 2 ways. One way will be by working with just a string, The other is by working with an array


*/

/* 
1. creat a function called removeVowels, it will take in a string
2.creat a variable pointing to the possible vowels : a e i o u
3.
4.
*/ 


// YOUR CODE HERE
function removeVowels(str){
    let vowels = "aeiouAEIOU";
    let piggybank = "";
   
    for(i = 0; i < str.length; i++){
        let letter = str[i];
        if(!vowels.includes(letter)){
        piggybank += letter
        }
        
    }
return piggybank;
}

console.log(removeVowels("hello")); // "hll"
console.log(removeVowels("GOOD bye")); // "GD by"
console.log(removeVowels("TRY")); // "TRY"



/* DO NOT MODIFY ANYTHING BELOW THIS LINE */

module.exports = {removeVowels};
