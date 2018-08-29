"use strict";
function getDet(arr){
  if(arr.length!=2 || arr[0].length!=2){
    console.log("必须是2阶矩阵");
    return false;
  }
  return arr[0][0]*arr[1][1]-arr[0][1]*arr[1][0];
}
export default function det(arr){
  if(arr.length==2){
    return getDet(arr);
  }
  var detA=0;
  for (let i = 0; i < arr.length; i++) {
    let n=Minor(JSON.parse(JSON.stringify(arr)),i,0);
    detA+=n;
  }
  return detA;
}
function Minor(Matrix,i,j){
  var k=Math.pow(-1,i+j),l=Matrix[i][j];
  for(let i=0;i < Matrix.length;i++){
    Matrix[i].splice(j,1);
  }
  Matrix.splice(i,1);
  return k*l*det(Matrix);
}
