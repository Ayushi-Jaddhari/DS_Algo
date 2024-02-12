// You are given three positive integers, A, B, and C.

// Any positive integer is magical if divisible by either B or C.

// Return the Ath smallest magical number. Since the answer may be very large, return modulo 109 + 7.

// Note: Ensure to prevent integer overflow while calculating.

function gcd( A , B){
    if(A == 0 ) return B;
    return gcd(B%A, A);
}
function solve(A , B , C) {
    let start = 0 , end = Math.min(B , C) * A;
    let LCM = Math.floor((B * C) / gcd(B, C));
    let ans = 1;
    while(start <= end){
        let mid = Math.floor(( start + end )/2);
        let value = Math.floor(mid/B) + Math.floor(mid / C) - Math.floor(mid/LCM);
        console.log(mid,value);
        if(value >= A){
            ans = mid;
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return ans;
}



let result = solve(10, 111 , 114);

console.log(result);