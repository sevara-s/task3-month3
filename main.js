let num = "123456";
let len = num.length;
let med = Math.floor(len / 2);
let sum = 0;
if (len % 2 == 0) {
    console.log((parseInt(num[med])+ parseInt(num[med-1]))/2);
} else {
  console.log(num[med]);
}
