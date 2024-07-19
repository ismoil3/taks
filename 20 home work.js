// function firstNonRepeatingChar(a){
//     let charCount = [];
//     for(let i=0; i<a.length; i++){
//         if(charCount[a[i]]){
//             charCount[a[i]]++;
//         } else {
//             charCount[a[i]] = 1;
//         }
//     }
//     for(let i=0; i<a.length; i++){
//         if(charCount[a[i]] === 1){
//             return a[i];
//         }
//     }
// }
// console.log(firstNonRepeatingChar("abcc"));



// taks 2
// function asd(a){
// for(let i=0; i<a.length; i++){
//     if(isNaN(a[i])) return false;

// }
// return true;

// }console.log(asd("1111"));




// task 3

// function asd(a,b){
//     return a.slice(0,b)
// }
// console.log(asd("javascript", 4));



// task 4


// function toSnakeCase(a) {
//     let sum = '';
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] != a[i].toLowerCase()) {
//             sum += '_';
//         }
//         sum += a[i].toLowerCase();
//     }
//     return sum;
// }
// console.log(toSnakeCase("helloWorld"));



// taks 5
// function asd(a){
//     let sum=a.split(" ")
//     for(let  i=0;i<sum.length;i++){
//      let aval=sum[i].charAt(0).toUpperCase()
//      let ohir=sum[i].at(-1).toUpperCase()
//       sum[i]=aval+sum[i].slice(1,-1)+ ohir
//     }
//     return sum.join(" ")
// }
// console.log(asd("javascript is fun"));


// task 6

// function asd(a){
//     let sum=a.split("://")
//     let sum2=sum[1].split("/")
//     sum2=sum2[0].split("www.")
//     return sum2[1]
// }
// console.log(asd("https://www.example.com/path"));



// taks 7

// function asd(a){
//     let sum="#, @,?,/,>,<,\,|,*,(,),*,&,^,%,$,!,=,+,[,]"
//     let sum2=a.split("")
//     for(let i=0; i<sum2.length; i++){
//         if(sum.includes(sum2[i])){
//             sum2[i]=""
//         }
//     }
//     return sum2.join("")
// }
// console.log(asd("javascript#123"));




    // taks 8
// function isPalindrome(a){
//  let sum=a.split("").reverse().join("")
//  return sum==a
// }
// console.log(isPalindrome("madam"));



    // task 9

    // function reverseWords (words) {
    //     let as=words.split(" ")
        // let ans=""
        // for(let i=as.length-1;i>=0;i--){
        //     ans+=as[i]+" "
        // }
        // return ans
        // }
        // console.log(reverseWords("hello  word"));



// // taks 10
// function asd(a){
//     let aval=a.at(0)
//     let ohir=a.at(-1)
//     return ohir +a.slice(1,-1)+aval
// }
// console.log(asd("hello"));





 ///////////////////////////////////////    2     //////////////////////////////////////////

// taks 1
//  function asd(a){
//     let min=9999999999999
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         if(i%10<min){
//             min=i%10
//         }
//     }
//     return min
//  }
// console.log(asd(9999999123456789));





// taks 2
// function asd(a){
//     let min=-9999999999999
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         if(i%10>min){
//             min=i%10
//         }
//     }
//     return min
//  }
// console.log(asd(9999999123456789));


// taks 3
// function asd(a,b){
//     let as=""
//     for(let i=a;i<=b;i++){
//    as+=i+","
//     }
//     return as
// }
// console.log(asd(1,4));

// taks 4 nest !

// taks 5
// function asd(a,b,c){
// return (a+b+c)+(a-b-c)+(a*b*c)+(a/b/c)+(a%b%c)
// }
// console.log(asd(1,1,1));





// taks 6
// function asd(a){
//     let sum=0
//     let cnt=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//        sum+=i%10
//        cnt++
//     }
//     return sum/cnt
// }
// console.log(asd(12345));




// taks 7
// function asd(a,b){
     
// }




// taks 8

// function asd(a){
//     let sum=""
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         sum+=i%10
//     }
//     return sum
// }
// console.log(asd(123));



// taks 9



// taks 10
// function ClosesOne(a){
     
//  return function(){
//      return a.toString().split('').reduce((acc, val) => acc + Number(val), 0);
//     }  

// }
// console.log(ClosesOne(121221)());




































// function asd(a){
//     let cnt=""
//     for(let i=0;i<a.length;i++){
//         cnt+=a[i]+a[i]
//     }
//     return cnt
// }
// console.log(asd("string"));

// taks 2

// function asd(a){
// let sum=a.split("")
// for(let i=0;i<a.length;i++){
//         if(sum[i]==7){
//             return "Boom"
//         }
// }
// return "Not!"
// }
// console.log(asd("1,3,4,5,6,8"));




// taks 3
// function asd(a){
//     let sum=a.split("")
//     let d="1,2,3,4,5,6,7,8,9"
//     let sa=""
//     for(let i=0;i<a.length;i++){
//         if(!d.includes(sum[i])){
//             sa+=sum[i]
//         }
//     }
//     return sa
// }
// console.log(asd("mubashi23r1"));




// // taks 4
// function asd(a){
//     return a.split("").reverse().join("")
// }
// console.log(asd("hello word"));



// taks 5

// function asd(a){
//     let sam=""
//     for(let i=0;i<a.length;i++){
//         if(a[i]!=a[i+1]){
//             sam+=a[i]
//         }

//     }
//     return sam
// }
// console.log(asd("hellloo"));




// taks 6
// function asd(){
// let cnt=0
// return function (){
//     cnt++
//     return cnt
// }
// }
// let a=asd()
// console.log(a());
// console.log(a());





// taks 7
// function asd(){
//     let cnt=0
//     return function (a){
//         for(let i=a;i>0;i=Math.floor(i/10)){
//             cnt+=i%10
//         }
//         return cnt
//     }
// }
// let aa=asd()
// console.log(aa(12345));











// taks 8
// function asd(a){
//     let cnt=0
//     for(let i=1;i<=a;i++){
//      cnt+=Math.pow(i,3)
//     }
//     return cnt
// }
// console.log(asd(7));




// taks 9
