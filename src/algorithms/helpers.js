function generateArr(n,height){
  let narr =  Array.from({length: n}, () => {return {value:Math.floor(Math.random() * height),
color:undefined}});
  return narr;
}
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
function swap(arr,i,j){
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
// console.log(generateArr(10,90));
export {
  generateArr,swap,sleep
};