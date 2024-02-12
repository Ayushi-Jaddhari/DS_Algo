// There are two sorted arrays A and B of sizes N and M respectively.

// Find the median of the two sorted arrays ( The median of the array formed by merging both the arrays ).

// NOTE:

// The overall run time complexity should be O(log(m+n)).
// IF the number of elements in the merged array is even, then the median is the average of (n/2)th and (n/2+1)th element. For example, if the array is [1 2 3 4], the median is (2 + 3) / 2.0 = 2.5.

 function findMedianSortedArrays(A, B) {
  
        /**
         * REMEMBER:
         * - cut1 → right1 → a[cut1]
         * - cut2 → right2 → a[cut2]
         * 
         * -cut1-1 → left1 → a[cut1-1]
         * -cut2-1 → left2 → a[cut2-1]
         * 
         * Also,
         * - left1,left2 relates to max of left subarrays
         * - right1, right2 relates to min of right subarrays
         * 
         */
  
      //   checking for condition A.size<B.size
      if(A.length>B.length){
          return findMedianSortedArrays(B,A)
      }
  
      let arr1 = A;
      let arr2 = B;
     
      // calculating size of arrays
      let n1 = A.length;
      let n2 = B.length;
  
      // calculating low and high
      let low = 0;
      let high = n1;
  
      while(low<=high){
          // calculating cuts for arr1 and arr2
          let cut1 = parseInt((low+high)/2);
          let cut2 = parseInt((n1+n2+1)/2)-cut1; // (n+m+1)/2 - first half
  
          // calculating left1,right1, left2, right2 with considering edge cases when we are not picking any elements from left/right array
              // as left1/left2 will always be arr1[cut1-1]/arr2[cut2-1]
              let left1 = cut1==0 ? Number.MIN_SAFE_INTEGER : arr1[cut1-1];
              let left2 = cut2==0 ? Number.MIN_SAFE_INTEGER : arr2[cut2-1];
             
              // as right1/right2 will always be arr1[cut1]/arr2[cut2]
              let right1 = cut1==n1 ? Number.MAX_SAFE_INTEGER : arr1[cut1];
              let right2 = cut2==n2 ? Number.MAX_SAFE_INTEGER : arr2[cut2];
  
          // checking for ideal median condition
          if(left1<=right2 && left2<=right1){
              // checking for even length array (n1+n2%2==0, i.e sumd of length of both arrays)
              if((n1+n2)%2==0){
                  // in case of even length array, median will be the max of left array(from both left arrays) + min of right array(from both right arrays)
                  return ((Math.max(left1,left2)+ Math.min(right1,right2))/2).toFixed(1);
              }
              // for odd length array (n1+n2%2!=0, i.e sumd of length of both arrays)
              else{
                  // in case of odd length array, median will be the max of left array (from both left arrays)
                  return Math.max(left1,left2).toFixed(1)
              }
          }
          // checking for when left1 > right2, it means we have to reduce left1, so we will move left
          else if(left1>right2){
              high = cut1-1;
          }
          // when left2 > right1, it means we have to increase right1, so we will move right
          else{
              low = cut1+1;
          }
      }
    };

let arr1 = [1, 4, 5]
let arr2 = [2, 3]

let result = findMedianSortedArrays(arr1,arr2);

console.log(result);