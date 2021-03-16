function Enter() { 

let number=Number(document.getElementById("number").value) ; 

if ( number > 0 && number%2 == 0 ) {
    alert("That is even number")
}

else{ 
    alert (" That number is odd")
}

 }