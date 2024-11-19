const array1 = [1,2,3,4,5,6,7,8,9,1,2,3,4,5];
sum = array1.reduce((acc, num) => {acc + num}, 0);
console.log(sum);