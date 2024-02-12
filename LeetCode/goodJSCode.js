//console.log

const foo = {name:'tom',age:30, nervous:false};
const bar = {name:'dick',age:20, nervous:false};
const baz = {name:'harry',age:10, nervous:true};

//bad code
console.log(foo);
console.log(bar);
console.log(baz)
//It will print "Object:""

//Good code
console.log({foo,bar,baz});
console.log('%c My friends','color:orange;font-weight:bold');//bold-orange color
console.table([foo,bar,baz])//Array of object than print as table

//console.time
console.time('loop')

let i =0;
while(i<100000){i++
console.time(loop)}

//stack trace logs

const deleteMe =()=>console.log('bye bye')
deleteMe();
deleteMe();



//destructuring
const turtle ={
    name:'Alice',
    legs:4,
    shell:true
}
//bad code
function feed(animal){
    return `Feed ${animal.name} has ${animal.legs} legs`// here we are contimuously writing  animal
}
//good code

function feed(animal){
    let {name,legs}=animal;
    return `Feed ${name} has ${legs} legs`
}
function feed({name,legs}){
    return `Feed ${name} has ${legs} legs`
}

//template literals
const horse ={
    name:'A',
    age:8
}
function age(str,age){
    const realAge = age>5?'old':'young';
    return `${str[0]}${realAge} at ${age} years`;
}
const horseage = age`this horse is ${horse.age}`





var nextPermutation = function(nums) {
    if(nums == null || nums.length <= 1) return;
    let i = nums.length - 2;
    while(i >= 0 && nums[i] >= nums[i + 1]) i--; 
    if(i >= 0) {                           
        let j = nums.length - 1;              
        while(nums[j] <= nums[i]) j--;      
       [nums[i],nums[j]]=[nums[j],nums[i]];                     
    }
  reverse(nums, i + 1, nums.length - 1);      
}
function reverse( nums,  i,  j) {
while(i < j) [nums[i++],nums[j--]]=[nums[j--],nums[i++]];
}