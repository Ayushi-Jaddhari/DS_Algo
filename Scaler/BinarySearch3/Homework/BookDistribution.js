/* Given an array of integers A of size N and an integer B.

The College library has N books. The ith book has A[i] number of pages.

You have to allocate books to B number of students so that the maximum number of pages allocated to a student is minimum.

A book will be allocated to exactly one student.
Each student has to be allocated at least one book.
Allotment should be in contiguous order, for example: A student cannot be allocated book 1 and book 3, skipping book 2.
Calculate and return that minimum possible number.

NOTE: Return -1 if a valid assignment is not possible. */

function check(books,student,pages){
    let count = 0;
    let currAllocatedPages = 0;

    for(let i = 0 ; i < books.length; i++){
        if(books[i] > pages) return false;
        
        if(books[i] + currAllocatedPages > pages){
            count ++;
            currAllocatedPages = books[i];
        }
        else{
            currAllocatedPages += books[i];
        }
    }
    //console.log('count,pages',count,pages,student);
    if(count < student) return true;
    return false;
}

function book(books, student){
    let N = books.length;
    if( N < student) return -1;
    let start = Number.MIN_VALUE,end = 0;

    for(let i = 0 ; i < N ; i++){
        start = Math.max(books[i], start);
        end += books[i];
    }
    let ans = 0;
    while(start <= end){
        let pages = Math.floor((start + end) / 2);

        if(check(books,student,pages)){
            ans = pages;
            end = pages - 1;
        }
        else{
            start = pages + 1;
        }
    }
    return ans;

}


let books  = [97,26,12,67,10,33,79,49,79,21,67,72,93,36,85,45,28,91,94,57,1,53,8,44,68,90,24]; 
let student = 26;

let result =  book(books , student, 192);

console.log(result);