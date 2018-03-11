


var Num = [];
//var firstNum;
//var SecondNum;
var myNumber = new Number("0");



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
  
  }



function myEqual(){

  

   var SecondNum = document.getElementById("numers").innerHTML;
   document.getElementById("numers").innerHTML = "0";
   document.getElementById("numers").innerHTML = Number(myNumber) + Number(SecondNum);

}