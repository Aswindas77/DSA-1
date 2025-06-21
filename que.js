
                                            //!  D S A || I  \\

//! Find the prime
//! Find the duplicates
//! delete value 10


//! que1

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12]


// function findPrime(arr){
   
//     let prime =[]
// for(let i=0;i<arr.length;i++){
//     let isPrime=true
//     if(arr[i]<2){
        
//          isPrime=false
//     }
//     for(let j=2;j<=Math.sqrt(arr[i]);j++){
//         if(arr[i]%j==0){
//             isPrime =false;
//             break
//         }
//     }

//     if(isPrime){
//         prime.push(arr[i])
//     }
       
//     }

//     return prime
    
// }




// console.log(findPrime(arr))

















// ! binary search

// ! que 2

// let arr =[2, 5, 8, 12, 16, 23, 38, 56]

// let target =23

// function fn(arr,target){
//     let start=0
//     let end=arr.length-1
//     while(start<=end){
//         let mid =Math.floor((start+end)/2)
//         if(arr[mid]===target){
//             return console.log(`target at found at index :${mid}`)
//         }else if(arr[mid]<target){
//             start=mid+1
//         }else{
//             end=mid-1
//         }
//     }
//     return console.log(`the ${target} not found at the index`)
// }

// fn(arr,target)




// Input:   //! question not completed
// arr = [1, 2, 4, 4, 4, 5, 6]
// target = 4

// Output:
// 2




// ! fibonacci series (loop)



// ! normal loop 

// function multiply(arr){
//     let product=1
    
//     for(let i=0;i<arr.length;i++){
//         product*=arr[i]
//     }
//     return product
// }

// console.log(multiply([1,2,3,4]))










//! reverse the string

// let str="aswin"

// function sum(str,i=str.length-1,result=""){
//     if(i<0){
//         return result
//     }
//     result+=str[i]
//     return sum(str,--i,result)
    
// }
// console.log(sum(str))








//! Find factorial of n in using factorial

//! using loop

// function factorial(n){
//     let fact=1
//     for(let i=1;i<=n;i++){
//         fact=fact*i
//     }
//     return fact
// }
// console.log(factorial(5))


// function factorial(n){
    
//     if(n==1){
//         return 1
//     }
//     return n* factorial(n-1)
// }
// console.log(factorial(5))



//! find n numbers sum using recursion

// function sum(n){
    
//     if(n==0){
//         return 0;
//     }
//     return n + sum(n-1)
    
// }
// console.log(sum(2))


// ! find n number of even numbers 

// function even(n){
    
//     if(n<=0){
//         return 0;
//     }
//     if(n%2===0){
//         return n + even(n-2)
//     }else{
//         return even(n-1)
//     }
    
// }
// console.log(even(8))



// function fn(arr,i=arr.length-1,sum=[]){
//     if(i<0){
//         return sum
//     }
//     sum.push(arr[i])
    
//     return fn(arr,--i,sum)

// }

// console.log(fn([1,2,3,4,5]))



// ! que 

// let str ="aswin";

// function fn(str,i=0,stt=''){

//     if(i==str.length){
//         return stt
//     }


//     if(str[i]!=='i'){
//        stt+=str[i] 
//     }
//     i++
//     return fn(str,i,stt)
    
// }

// console.log(fn(str))





// ! que

// function fn(arr,i=arr.length-1,reverse=[]){
//     if(i<0){
//         return reverse
//     }
//     reverse.push(arr[i])
    
//     return fn(arr,--i,reverse)

// }

// console.log(fn([1,2,3,4,5]))



// ! que

// let str ="aswin";

// function fn(str,i=0,stt=''){

//     if(i==str.length){
//         return stt
//     }


//     if(str[i]!=='i'){
//        stt+=str[i] 
//     }
//     i++
//     return fn(str,i,stt)
    
// }

// console.log(fn(str))



// ! que

// function vowels(str,i=0,count=0){
    
//     if(i<str.length-1){
//         return count
//     }
    
//     let vowel="aeiouAEIOU"
//     if(vowel.includes(str[i])){
//         count ++
//     }
//     i++
//     return vowels(str,i,count)
// }


// let str="aswindas"

// console.log(vowels(str))