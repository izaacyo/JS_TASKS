/** 
 *1number1 . generate 5 randomize numbers
 * 2. Make those random numbers either 0 or1number1
 * 3. Check what is the combination that we get
 * 4. Decide wether the user has won or not 
 * 5. Display the message according to hte results
 */
let number1=Math.floor(Math.random()*10)   
let number2=Math.floor(Math.random()*10)
let number3=Math.floor(Math.random()*10)
let number4=Math.floor(Math.random()*10)
let number5=Math.floor(Math.random()*10) 


 /**

console.log (number1, number2, number3, number4, number5)

if (number1 % 2 === 0 ) {
    number1 = 0 ;
    
} else { 
    number1 =1number1   ;
}


if (number2 % 2 === 0 ) {
    number2 = 0 ;
    
} else { 
    number2 =1number1   ;
}

if (number3 % 2 === 0 ) {
    number3 = 0 ;
    
} else { 
    number3 =1number1   ;
}

if (number4 % 2 === 0 ) {
    number4 = 0 ;
    
} else { 
    number4 =1number1   ;
}

if (number5 % 2 === 0 ) {
    number5 = 0 ;
    
} else { 
    number5 =1number1   ;
}
if (number5 % 2 === 0 ) {
    number5 = 0 ;
    
} else { 
    number5 =1number1   ;
} */

number1 = (number1  % 2 === 0) ? 0 :1
number2 = (number2  % 2 === 0) ? 0 :1
number3 = (number3  % 2 === 0) ? 0 :1
number4 = (number4  % 2 === 0) ? 0 :1
number5 = (number5  % 2 === 0) ? 0 :1

console.log (number1, number2, number3, number4, number5) 

const sum= number1 + number2 + number3 + number4 + number5

if(sum ===5) {
    console.log ( `Congratulations! You won the jackpot! The chances to win were ${1/2**5}`)
} else if (sum === 0) {
    console.log ( "You got five zeros! Unfortunately, is not the jackpot winning combination but still impressive!")

}  else { 
console.log  ("Not a winning combination") }