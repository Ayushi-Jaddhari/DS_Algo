/* Problem Description
You are given a string A of lowercase English alphabets. Rearrange the characters of the given string A such that there is no boring substring in A.

A boring substring has the following properties:

Its length is 2.
Both the characters are consecutive, for example - "ab", "cd", "dc", "zy" etc.(If the first character is C then the next character can be either (C+1) or (C-1)).
Return 1 if it is possible to rearrange the letters of A such that there are no boring substrings in A else, return 0.

 */

function solve(str){
    let n = str.length;
    let oddStr = '';
    let evenStr = '';

    for(let i = 0 ; i < n ; i++){
        if(str[i].charCodeAt() % 2 == 0) oddStr += str[i];
        else evenStr +=str[i];
    }

    evenStr = evenStr.split("").sort().join("");
    oddStr = oddStr.split("").sort().join("");

    if(Math.abs(evenStr[evenStr.length-1].charCodeAt() - oddStr[0].charCodeAt())!=1){
        return 1;
    }
    if(Math.abs(oddStr[oddStr.length-1].charCodeAt() - evenStr[0].charCodeAt())!=1){
        return 1;
    }
    return 0;

}


str = "wwuvuw"


console.log(solve(str));