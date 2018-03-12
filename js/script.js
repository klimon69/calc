


var Num = [];
//var firstNum;
//var SecondNum;
var myNumber = new Number("0");
var SecondNum = new Number("0");
var flag = new Number("0");



function myFunction(clicked_id) {
    
      
      var b = clicked_id;
      
      
      Num.push(b);
      

      document.getElementById("numers").innerHTML = Num.join ('');
      
    
   }

 function myClear() {

   	document.getElementById("numers").innerHTML = "0";
   	Num = [];


   }


  function myPlus(){


   myNumber = document.getElementById("numers").innerHTML;
   	
   myClear();
   		
   myFunction();

    
   document.getElementById("numers").innerHTML = "0"; 
   flag = 1;
  
  }





  function myMinus(){


   myNumber = document.getElementById("numers").innerHTML;
   	
   myClear();
   		
   myFunction();

    
   document.getElementById("numers").innerHTML = "0"; 

   flag = 2;
  
  }

function myDivide(){


   myNumber = document.getElementById("numers").innerHTML;
   	
   myClear();
   		
   myFunction();

    
   document.getElementById("numers").innerHTML = "0"; 

   flag = 3;
  
  }


  

  function myMultiply(){


   myNumber = document.getElementById("numers").innerHTML;
   	
   myClear();
   		
   myFunction();

    
   document.getElementById("numers").innerHTML = "0"; 

   flag = 4;
  
  }








function myEqual(){

  

   var SecondNum = document.getElementById("numers").innerHTML;
   document.getElementById("numers").innerHTML = "0";

   



   if (flag==1) {

   document.getElementById("numers").innerHTML = Number(myNumber) + Number(SecondNum);

} else if (flag==2){

	
   document.getElementById("numers").innerHTML = myNumber - SecondNum;

}  else if (flag==3){

	
   document.getElementById("numers").innerHTML = myNumber/SecondNum;

}  else if (flag==4){

	
   document.getElementById("numers").innerHTML = myNumber*SecondNum;

} 

 




}