// !recursion factorial (number)

// function factorial(num){
//     if(num==1){
//         return 1
//     }
//     return num * factorial(num-1)
// }

// console.log(factorial(5))


// !recursion factorial (array)


// function fact(num){
//     if(num===1 || num===0){
//         return 1
//     }
//     return num * fact(num-1)
// }
// function facArray(arr){
//     if(arr.length===0){
//         return [];
//     }
//     return [fact(arr[0])].concat(facArray(arr.slice(1)))

// }

// let arr =[3,4,5];

// console.log(facArray(arr))


// ! first 10 fibonacci numbers using recursion 

// function fibonacci(num,a=0,b=1,count=0){
    
//     if(count>=num){
//         return
//     }
//     console.log(a)
//     return fibonacci(num,b,a+b,count+1)
    
// }


// fibonacci(10)


// ! Reverse a string

// function reverseString(str,i=str.length-1,result=""){
//     if(i<0){
//        return result
//     }
//     result+=str[i]
//     return reverseString(str,--i,result)
// }

// let str ="hello"
// console.log(reverseString(str))


// ! sum of array




// ! find vowels in recursion

// function vowels(str,i=0,count=0){
    
//     if(i>str.length-1){
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




// ! check string palindrome

// function palindrome(str,start=0,end=str.length-1){
    
//     if(start>=end){
//         return true
//     }

//     if(str[start]!==str[end]){
//         return false
//     }
//     return palindrome(str,start+1,end-1)

// }

// let str="madams"

// console.log(palindrome(str))


// ! find the max values

// function max(arr,index=0,maxi=-Infinity){

//     if(index===arr.length){
//         return maxi
//     }

//     if(arr[index]>maxi){
//         maxi=arr[index]
//     }
//     index++
//     return max(arr,index,maxi)
// }

// let arr=[1,3,2,4,5,2]

// console.log(max(arr))


// !  recursion using second largest

// function secondMax(arr,index=0,second=-Infinity,largest=-Infinity){

//     if(index==arr.length){
//         return second
//     }
//     const curr =arr[index]

//     if(curr>largest){
//         second=largest
//         largest=curr
//     }else if(curr > second && curr !==largest){
//         second=curr
//     }
//     index++

//     return secondMax(arr,index,second,largest)
// }

// const arr=[2,3,7,5,10,39]

// console.log(secondMax(arr))


// ! reverse array 

// function reverse(arr,i=arr.length-1,rev=[]){

//     if(i<0){
//         return rev
//     }

//     rev.push(arr[i])

//     i--

//     return reverse(arr,i,rev)
// }

// let arr=[1,2,3,4,5]

// console.log(reverse(arr))



// ! sum

// function arraySum(arr,i=0,sum=0){
//     if(i>arr.length-1){
//         return sum
//     }

//     sum+=arr[i]
//     i++

//     return arraySum(arr,i,sum)
// }

// let arr=[1,2,3,4,5]

// console.log(arraySum(arr))









//! linked list    array to linked list

// class Node{
//     constructor(value){
//     this.value=value;
//     this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     addFirst(value){
//         const newNode=new Node(value)

//         newNode.next=this.head
//         this.head=newNode
//     }

//     reverse(){
//         let prev=null;
//         let current=this.head;

//         while(current) {
//             let next =current.next;
//             current.next=prev;
//             prev =current;
//             current =next;
//         }
//         this.head = prev;
//     }

//      listToArray(list) {
//        const result=[]
//        let current=this.head
//        while(current){
//         result.push(current.value)
//         current =current.next
//        }
//        return result
//     }

//     arrayToList(arr){
//         const list = new linkedList();
//         for(const value of arr){
//             list.addFirst(value)
//         }
//         return list
//     }

//     printList(){
//         let current =this.head
//         let Output ='';

//         while(current){
//             Output+=current.value+ ' ';
//             current=current.next;
//         }
//         console.log(Output)

//     }
// }

// const list=new linkedList()

// list.addFirst(3)
// list.addFirst(2)
// list.addFirst(1)

// const array =list.listToArray(list)
// console.log(array)
// // list.reverse()
// list.printList()

// const newList = list.arrayToList([10,20,30])
// newList.printList()


// ! que


// class Node {
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.size=0;
//     }

//     addFirst(value){
//      const newNode=new Node(value)

//      newNode.next =this.head
//      this.head =newNode
//      this.size++
//     }
//     addLast(value){
//         let curr=this.head;
//         const newNode=new Node(value)
//         while(curr.next){
//             curr=curr.next
//         }
//         curr.next=newNode
//         this.size++

//     }
//     deleteLast(){
//       let current=this.head;
//       let prev=null
//       while(current.next){
//         prev=current
//         current=current.next
//       }
//       if(prev){
//         prev.next=null
//       }else{
//         this.head=null
//       }
//       this.size--
       
//     }
//     deleteFirst(){
//       if(!this.head){
//         return
//       }else{
//         this.head=this.head.next
//       }
//       this.size--
      

//     }
//     valueSearch(){
        
//     }
    // indexValue(value){
    //    let current=this.head;
    //    while(current){
       
    //         if(current.value===value){
    //             return true
    //         }else{
    //             return false
    //         }

           
    //    }
    //    return false

//    }

//     indexAdd(index,value){
//         let current=this.head
//        const newNode =new Node(value)
//        for(let i=0;i<index-1;i++){
//           current=current.next
//        }
//        newNode.next=current.next
//        current.next=newNode
//        size++
//     }
//     findMid(){

//     }
//     addMid(){

//     }
//     deleteMid(){

//     }

//     printList(){
//         let curr=this.head;
//         let output=''
//         while(curr){
//             output+=curr.value+' '
//             curr=curr.next
//         }
//         console.log(output)
//     }
// }

// const list =new linkedList()

// list.addFirst(3)
// list.addFirst(2)
// list.addFirst(1)
// list.addLast(4)
// // list.deleteLast()
// // list.deleteFirst()
// console.log(list.indexValue(2))
// list.printList() 


















