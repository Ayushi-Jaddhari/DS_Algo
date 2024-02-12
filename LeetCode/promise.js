let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});


p.then((message)=>{
    console.log('This is in the then : ',message);
}).catch((message)=>{
    console.log('This is in the catch : ' ,message)
})


const userLeft = false;
const userWatchingCatMeme = true;
// function watchTutorialCallback(callback,errorCallback){
//     if(userLeft){
//         errorCallback({
//             name:'User Left',
//             message:':('
//         })
//     }else if(userWatchingCatMeme){
//         errorCallback({
//             name:" User Watching Cat Meme",
//             message:' Hey Cat'
//         })
//     }else{
//         callback('Thumbs up and  Subscribe')
//     }
// }

// watchTutorialCallback((message)=>{
//     console.log('Success : ', message)
// },(error)=>{
//     console.log(error.name +            +error.message)
// })

function watchTutorialPromise() {
    return new Promise((resolve,reject)=>{
    if(userLeft){
        reject({
            name:'User Left',
            message:':('
        })
    }else if(userWatchingCatMeme){
        reject({
            name:" User Watching Cat Meme",
            message:' Hey Cat'
        })
    }else{
        resolve('Thumbs up and  Subscribe')
    }
    })
}

watchTutorialPromise().then((message)=>{
    console.log('Success : ', message)
}).catch((error)=>{
    console.log(error.name +            +error.message)
})


const recordVideoOne = new Promise((resolve,reject)=>{
    resolve('Recorded Video 1')
})
const recordVideoTwo = new Promise((resolve,reject)=>{
    resolve('Recorded Video 2')
})
const recordVideoThree = new Promise((resolve,reject)=>{
    resolve('Recorded Video 3')
})

Promise.all([recordVideoOne,recordVideoTwo,recordVideoThree]).then((messages)=>{
    console.log(messages)
})
Promise.race([recordVideoOne,recordVideoTwo,recordVideoThree]).then((message)=>{
    console.log(message)
})


let a=10;
let p2 = new Promise((resolve,reject)=>{
    if(a%2===0){
        resolve('Even')
    }else{
        reject('Odd')
    }
});

p2.then((success)=>{
    console.log('Sucess---------------->',success);
}).catch((err)=>{
    console.log('May be Error---------------->',err)
})