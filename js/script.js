


var Num = [];
var firstNum;
var SecondNum;


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


   var firstNum = document.getElementById("numers").innerHTML;
   	
   	document.getElementById("numers").innerHTML = "0";
   	Num = [];
   	
    myFunction();

    
    alert(firstNum);
  
  }



function myEqual(){

  

   var SecondNum = document.getElementById("numers").innerHTML;
   document.getElementById("numers").innerHTML = "0";
   document.getElementById("numers").innerHTML = Number(firstNum) + Number(SecondNum);

}