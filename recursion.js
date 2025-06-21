// ! recursion 

//! 1 print 1 to n

// function recursion(start,end){
//     if(start>end){
//         return 
//     }
//     console.log(start)
//     recursion(start+1,end)
// } 

// let start=1
// let end=5

// recursion(start,end)



//! 2 print n to 1


// function reverse(start,end){
    
//     if(start>end){
//         return console.log("recursion is ended")
//     }
//     console.log(end)

//     reverse(start,end-1)
// }

// reverse(1,5)


//! Find first 10 Fibonacci number (0,1,1,2,3,5,8)


// function fibonacci(a,b,max){
    
//     if(a>max){
//         return
//     }
//     console.log(a)
//     fibonacci(b,a+b,max)
// }
// fibonacci(0,1,10)