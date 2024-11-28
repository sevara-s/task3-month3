// 3-masala
let a = "abc";
let b="cba";
let b_reverse="";
for (let i = b.length-1; i>=0; i--){
    b_reverse+=b[i];
}
if (b_reverse == a){
    console.log(true);
}else{
    console.log(false);
}