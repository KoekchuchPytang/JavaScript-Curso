//11a
const nums = [10,20,30];
nums[2] = 99;

//11b
function getLastValue(array){
  return array[array.length-1];
}

console.log(getLastValue(nums));
console.log(getLastValue([1,3,6,9,12,80,90,100,123]));

//11c
function arraySwap(array){
  firstValue = array[0];
  lastValue = array[array.length-1];
  array[0] = lastValue;
  array[array.length-1] = firstValue;
  return array;
}

console.log(arraySwap(nums));
console.log(arraySwap(['hi','hello','good']));

for (let i = 0; i <= 10; i+= 2) {
  console.log(i);
  
};
for (let i = 5; i > 0; i--) {
  console.log(i);
  
};
let i = 0;
while (i <= 10){
  console.log(i);
  i+= 2;
};
i = 5;
while (i > 0){
  console.log(i);
  i--;
};

console.log(nums);

function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i]+1;
  };
  return array;
};

console.log(addOne([1,2,3]));

console.log(addOne([-2,-1,0,99]));

function addNum(array,num){
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i]+num;
  };
  return array;
};

console.log(addNum([5,10,15,20],10));

function addArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    array1[i] += array2[i];
  };
  return array1;
};

console.log(addArrays([1,2,3],[3,2,1]));
