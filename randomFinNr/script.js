const myNumber = Math.round(Math.random() * 100);
let result = ""

if( 0 <= myNumber && myNumber <= 10 ) { 

switch(myNumber){ 
  case 0 : 
  result = "nolla";
  break ;

  case 1 : 
  result = "yksi";
  break ;

  case 2 : 
  result = "kaksi";
  break ;

  case 3 : 
  result = "kolme";
  break ;

  case 4 : 
  result = "nelja";
  break ;

  case 5 : 
  result = "viisi";
  break ;

  case 6 : 
  result = "kuusi";
  break ;

  case 7 : 
  result = "seitsemän";
  break ;

  case 8 : 
  result = "kahdeksan";
  break ;

  case 9 : 
  result = "yhdeksän";
  break ;

  case 10 :
  result= "kymmenen";
  break; 

  default:
    break;
     }

     
}   else if (10 <myNumber && myNumber <= 19) { 
 let remainder = myNumber - 10 ; 
 
  switch(remainder){   
case 1:
    result += "yksi";
    break;

 case 2:
    result += "kaksi";
    break;

 case 3:
    result += "kolme";
    break;

 case 4:
     result += "neljä";
     break;

 case 5:
    result += "viisi";
     break;

 case 6:
   result += "kuusi";
    break;

 case 7:
 result += "seitsemän";
  break;

 case 8:
 result += "kahdeksan";
  break;

 case 9:
  result += "yhdeksän";
  break;

default:
    break;
}
    result += 'toista';  


} else if (20 <= myNumber && myNumber <=99 ) { 
  let module = Math.floor(myNumber / 10) ; 
  let remainder = myNumber % 10 ;

switch(module) { 
  case 1 : 
  result += "yksi";
  break; 
  
  case 2 :
  result += "kaksi";
  break;

  case 3 : 
  result += "kolme" ;
  break; 

  case 4 : 
  result += "nelja" ;
  break; 

  case 5 : 
  result += "viisi" ;
  break ;

  case 6:
  result += "kuusi";
 break ; 

  case 7 :
  result += "seitsemän" ; 
  break ;
 
  case 8 :
  result += "kahdeksan"
  break ; 

  case 9: 
  result += "yhdeksän"
  break ; 

  default:
    break ;
     }

     result += `kymmentä`; 

   switch (remainder) {
    case 1 : 
    result =+ "yksi";
    break; 
    
    case 2 :
    result += "kaksi";
    break;
  
    case 3 : 
    result += "kolme" ;
    break; 
  
    case 4 : 
    result += "nelja" ;
    break; 
  
    case 5 : 
    result += "viisi" ;
    break ;
  
    case 6:
    result += "kuusi";
   break ; 
  
    case 7 :
    result += "seitsemän" ; 
    break ;
   
    case 8 :
    result += "kahdeksn" ;
    break ; 
  
    case 9: 
    result += "yhdeksän" ;
    break ; 
  
    default:
      break ;
       }
         }else { 
           result= `sata`
   }
   console.log(myNumber + "-" + result) ; 
