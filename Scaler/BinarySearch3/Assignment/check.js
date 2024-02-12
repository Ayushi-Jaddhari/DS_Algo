function check(time, maxTime, boards) {
  console.log("maxTime", maxTime);
  let count = 1;
  let N = boards.length;
  let paintersTime = maxTime;
  for (let i = 0; i < N; i++) {
    if (boards[i] * time > maxTime) return false;
    console.log(boards[i] * time, paintersTime)
    if (boards[i] * time <= paintersTime) {
      paintersTime -= (boards[i] * time);
    } else {
      count++;
      paintersTime = maxTime - (boards[i] * time);
    }
  }
  console.log("count", count);
  // if(count <= painters){
  //     return true;
  // }
  return count;
}
let painters = 3;
let time = 10;
let boards = [185, 186, 938, 558, 655, 461, 441, 234, 902, 681];

let result = check(time, 9380, boards );
console.log(result);
