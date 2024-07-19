// function asd(a,b){
//     return a*2**b
// }
// console.log(asd(10,3));



// function numToString(a = null) {
//     return (b = null) => {
//       if (typeof a === "number" && typeof b === "string") {
//         return a.toString() + " is string " + +b + " is number ";
//       }
//       if (typeof a === "number") {
//         return a.toString() + " is string ";
//       }
//       if (typeof b === "string") {
//         return +b + " is number ";
//       }
//     };
//   }
//   console.log(numToString(200)("12"));
  


// taks 3 
// function asd(a){
//     return function (b){
//         return a+b
//     }
// }
// let as=asd(5);
// console.log(as(2));





// taks 4
// function asd(a,b){
//     return a/2**b
// }
// console.log(asd(-24, 2));



// taks 5
// function asd(a){
//     let cnt=a
//     return  function (){
//         if(a%2==0){
//             cnt++
//         }
//         else {
//             cnt--
//         }
//         return cnt
//     }
// }
// let as=asd(6)
// console.log(as());
// console.log(as());
// let av=asd(5)
// console.log(av());
// console.log(av());
// console.log(av());
// console.log(av());
// console.log(av());
// console.log(av());
// console.log(av());




// taks 6
// function asd(a){
//     let  p0=3
//     let  p1=0
//     let  p2=2
//     let  pn=0
//     for(let i=3;i<=a;i++){
//         pn=+p1+p0
//         p0=p1
//         p1=p2
//        p2=pn
//     }
//     return pn
// }
// console.log(asd(8));



// taks 7
// function asd(a){
//     return function (b){
//         if(b==null){
//             return a
//         }
//         return b
//     }
// }
// let as=asd(10)

// console.log(as(20));


// taks 8
// function asd(a,b){
//     return a.repeat(b)
// }
// console.log(asd("add",3));

// taks 9
// function asd(num1,num2){
//     return function (num3,num4){
//         return function (num5,num6){
//             return num1*num3*num5+num2*num4*num6
//         }
//     }
// }
// console.log(asd(1,2)(1,1)(2,3));



// function asd(a,b){
//     return a.repeat(b)
// }
// console.log(asd("add",3));


////////////////////////////////// taks 2 ///////////////////////////////////////////////////


// function asd(a){
//     let f=a.at(0)
//     return f.toUpperCase()+a.slice(1)
// }
// console.log(asd("hello"));






// taks 2
// function asd(a,b){
//     let cnt=0
//     for(let i=0;i<a.length;i++){
//     if(a[i]==b) cnt++
//     }
//     return cnt
// }
// console.log(asd("hello","l"));




// taks 3
// function asd(a){
//     let cnt=""
//    for(let i=a.length-1;i>=0;i--){
//     cnt+=a[i]
//    }
//    return cnt
// }
// console.log(asd("hello"));



// function asd(a,b){
//     return a.repeat(b)
// }



// taks 5

// function asd(a){
//     let vowels = "a, e, i, o, u";
//     let ans = '';
//     for (let i = 0; i < a.length; i++) {
//         if (!vowels.includes(a[i])) {
//             ans += a[i];
//         }
//     }
//     return ans;
// }
// console.log(asd("world"));


// taks 6
// function asd(a){
// let vowels = "a, e, i, o, u";
//     let ans = 0;
//     for(let i=0;i<a.length;i++){
//         if(vowels.includes(a[i])){
//             ans++
//         }
//     }
//     return ans
// }
// console.log(asd("world"));



// talks 7
// function capitalizeWords(a){
//     let word=a.split(" ");
//     for(let i=0;i<word.length;i++){
//         word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
//     }
//     return word.join(" ")
// }
// console.log(capitalizeWords("hello is word"));




// taks 8
// function isPalindrome(str){
//     let reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }
// console.log(isPalindrome("madam"));


// taks 9

// function reverseWords (words) {
// let as=words.split(" ")
// let ans=""
// for(let i=as.length-1;i>=0;i--){
//     ans+=as[i]+" "
// }
// return ans
// }
// console.log(reverseWords("hello is word"));







// taks 10
// function removeCharacter(a,b){
//     let ans=""
//     for(let i=0;i<a.length;i++){
//         if(a[i]!==b){
//             ans+=a[i]
//         }
//     }
//     return ans;
 
// }
// console.log(removeCharacter("hello world","l"));




// taks 11
// function asd (a){
//     let ans=''
//     for(let i=0;i<a.length;i++){
//         if(a[i]!=a[i+1]){
//             ans+=a[i]
//         }
//     }
//     return ans
// }
// console.log(asd("hello"));




// taks 12
// function asd(a){
//     let aval=a.at(0)
//     let ohir=a.at(-1)
//     return ohir +a.slice(1,-1)+aval
// }
// console.log(asd("hello"));


// taks 13
// function asd(a){
//     let min=""
//     let as=a.split(" ")
//     for(let i=0;i<as.length;i++){
//        if(as[i]>min){
//         min=as[i]
//        }
//     }
//     return min
// }
// console.log(asd("hello world"));



// taks 14
// function asd(a){
//     let min=""
//     let as=a.split(" ")
//     for(let i=0;i<as.length;i++){
//        if(as[i]>min){
//         min=as[i]
//        }
//     }
//     return min
// }
// console.log(asd("hello world"));


// taks 15
// function asd(a){
//     return a.split("").sort().join("")
// }
// console.log(asd("world"));



function asd(a){
    let ans=""
    for(let i=0;i<=a;i++){
   ans+="I love you ❤️"
    }
    return ans
}
console.log(asd(100000));