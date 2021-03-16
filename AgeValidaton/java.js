function enter( ) { 
const age = document.getElementById("Age").value; 

 if ( age && age < 18) { 
  alert ("Your age is" + " " + age + "." + " That means you are too young.");
   
 }

 else if( 18 <= age && age < 27 ) { 
   alert ( "Right age for military service. Welcome!") ; 

   }

else if ( 28 <= age && age < 41 ) { 
    alert( "Your age is"  + " " + age + "." + "You are in reserve.") ;
 }

 else if ( 42 <= age && age < 55 ) { 
     alert ( "You are backup in reserve"); 
 }

 else { 
     alert ( "Your age is too high.") ;
 }
 
}
 