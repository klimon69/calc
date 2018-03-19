


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

   Num = [];
   		
   myFunction();

    
   document.getElementById("numers").innerHTML = myNumber; 
   flag = 1;
  
  }





  function myMinus(){


   myNumber = document.getElementById("numers").innerHTML;
   	
   Num = [];
   		
   myFunction();

    
   document.getElementById("numers").innerHTML = myNumber; 

   flag = 2;
  
  }

function myDivide(){


   myNumber = document.getElementById("numers").innerHTML;
   	
   Num = [];
   		
   myFunction();

    
   document.getElementById("numers").innerHTML = myNumber; 

   flag = 3;
  
  }


  

  function myMultiply(){


   myNumber = document.getElementById("numers").innerHTML;
   	
   Num = [];
   		
   myFunction();

    
   document.getElementById("numers").innerHTML = myNumber; 

   flag = 4;
  
  }


  function mySqr(){

    myNumber = document.getElementById("numers").innerHTML;
    
   Num = [];
      
   myFunction();

   document.getElementById("numers").innerHTML = Math.sqrt(Number(myNumber));


  }



  function myPers(){

  var SecondNum = document.getElementById("numers").innerHTML;
  if (flag==4){

   
   document.getElementById("numers").innerHTML = Math.round(myNumber/100*SecondNum);

} 

 
  }




function myDel(){

var oldNum = document.getElementById("numers").innerHTML;
var oldArr = String(oldNum).split("");

     if (oldArr.length>1){

          
           delete oldArr[(oldArr.length-1)];
          document.getElementById("numers").innerHTML = oldArr.join ('');
    }else{


           

                    document.getElementById("numers").innerHTML = "0";
                    Num = [];


                  }



    



}






function myEqual(){

  

   var SecondNum = document.getElementById("numers").innerHTML;
   document.getElementById("numers").innerHTML = "0";

   



   if (flag==1) {

   document.getElementById("numers").innerHTML = Number(myNumber) + Number(SecondNum);

} else if (flag==2){

	
   document.getElementById("numers").innerHTML = myNumber - SecondNum;

}  else if (flag==3 && SecondNum>0){

	
   document.getElementById("numers").innerHTML = myNumber/SecondNum;

} else if (flag==3 && SecondNum==0){

	
   document.getElementById("numers").innerHTML = "0";

} else if (flag==4){

	
   document.getElementById("numers").innerHTML = myNumber*SecondNum;

} 

 




}