// Given two strings A and B. Each string represents an expression consisting of lowercase English alphabets, '+', '-', '(' and ')'.

// The task is to compare them and check if they are similar. If they are identical, return 1 else, return 0.

// NOTE: It may be assumed that there are at most 26 operands from ‘a’ to ‘z’, and every operand appears only once.

function solve(A, B){
    let alphabets = Array(26).fill(0);
    evaluate(A, alphabets, true);
    evaluate(B, alphabets, false);
    for(let i = 0 ; i < 26 ; i++){
        if(alphabets[i]) return 0;
    }
    return 1;
}

function checkSign(str, index){
    //if opening at 0th index,i.e no prior sign
    if(index == 0) return true;
    //if '-' then only sign changes.
    if(str[index - 1] == '-') return false;
    return true;
}
function evaluate(str , alphabets, flag){
    let stack = [true];
    for(let i = 0 ; i < str.length ; i++){
        
        if(str[i] === '+'  || str[i] == '-') continue;

        else if(str[i] == '('){
            let top = stack[stack.length - 1 ];
            if(checkSign(str, i)) stack.push(top);
            else stack.push(!top);
        }
        else if(str[i] == ')') stack.pop();
        else{
            let top = stack[stack.length - 1];
            if(top){
                if(checkSign(str, i)){
                    if(flag == true){
                        alphabets[str[i].charCodeAt(0) - 97] +=1;
                    }
                    else{
                        alphabets[str[i].charCodeAt(0) - 97] -=1;
                    }
                }
                else{
                    if(flag == true){
                        alphabets[str[i].charCodeAt(0) - 97] -=1;
                    }
                    else{
                        alphabets[str[i].charCodeAt(0) - 97] +=1;
                    }
                }
            }
            else{
                if(checkSign(str, i)){
                    if(flag == true){
                        alphabets[str[i].charCodeAt(0) - 97] -=1;
                    }
                    else{
                        alphabets[str[i].charCodeAt(0) - 97] +=1;
                    }
                }
                else{
                    if(flag == true){
                        alphabets[str[i].charCodeAt(0) - 97] +=1;
                    }
                    else{
                        alphabets[str[i].charCodeAt(0) - 97] -=1;
                    }
                }
            }
        }
    }
}

let a = '(a+b-c-d+e-f+g+h+i)'
let b = 'a+b-c-d+e-f+g+h+i'

console.log(solve(a,b))