let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];

for(let i=0; i<checkArr.length; ++i){
  console.log(checkArr[i]);
  if(checkArr[i] < 0){
    checkArr[i] = 0;
  }
}

console.log(checkArr);
