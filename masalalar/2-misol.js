
// 2-masala
let soz = "ewrhiu123";
let sum= 0;
for (let i = 0; i <=soz.length-1; i++){
    if (!isNaN(soz[i])){
        sum+= parseInt(soz[i]);
    }

}
console.log(sum);