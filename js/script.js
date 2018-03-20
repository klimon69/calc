

var ResArr=[]; 
var Num = [];                      /*Массив для работы над числами*/
var myNumber = new Number("0");   /*Первое число*/
var SecondNum = new Number("0");   /*Второе число*/
var flag = new Number("0");        /*флаг для того что бы узнать что было нажато плюс минус умножить или поделить*/
var Res = new Number("0");


/*===========================ф-ция цифры не нажимаются=====================================================*/

function numsBlock(){


     for (var i = 0; i < 9; i++) {

       document.getElementById("i").className = "block";
       
     }

     


}




/*===========================ф-ция цифры нажимаются=====================================================*/

function numsUnlock(){

     for (var i = 0; i < 9; i++) {

       document.getElementById("i").className = "i";
       
     }


}







/*===========================ф-ция нажатия на цифры=====================================================*/


function myFunction(clicked_id) {
    
      
      var b = clicked_id;
      
      
     

        if (Num.length <=15){        /* что бы число не вылазило за границы табло (не блоее 15 знаков)*/
          
           Num.push(b);

          document.getElementById("numers").innerHTML = Num.join ('');


        }else{

         numsBlock();
         

        }
      

      
      
    
}



/*================================ф-ция очистки табло================================================*/


function myClear() {

   	document.getElementById("numers").innerHTML = "0";
   	
    Num = [];


}


/*==================================ф-ция сложения==============================================*/


function myPlus(){


     myNumber = document.getElementById("numers").innerHTML;

     Num = [];
   		
     myFunction();
       
     document.getElementById("numers").innerHTML = myNumber; 
     
     flag = 1;
  
}


/*==================================ф-ция вычитания==============================================*/


function myMinus(){


      myNumber = document.getElementById("numers").innerHTML;
   	
      Num = [];
   		
      myFunction();

      document.getElementById("numers").innerHTML = myNumber; 

      flag = 2;
  
}



  /*==================================ф-ция деления==============================================*/

function myDivide(){


      myNumber = document.getElementById("numers").innerHTML;
   	
      Num = [];
   		
      myFunction();
    
      document.getElementById("numers").innerHTML = myNumber; 

      flag = 3;
  
}


  
/*==================================ф-ция умножения==============================================*/


function myMultiply(){


      myNumber = document.getElementById("numers").innerHTML;
   	
      Num = [];
   		
      myFunction();

      document.getElementById("numers").innerHTML = myNumber; 

      flag = 4;
  
}




/*==================================ф-ция корень=============================================*/


function mySqr(){

      myNumber = document.getElementById("numers").innerHTML;
    
      Num = [];
      
      myFunction();

      document.getElementById("numers").innerHTML = Math.sqrt(Number(myNumber));


}



/*==================================ф-ция процент==============================================*/


function myPers(){

     var SecondNum = document.getElementById("numers").innerHTML;
         if (flag==4){

            document.getElementById("numers").innerHTML = Math.round(myNumber/100*SecondNum);

          } 

 
}





/*==================================ф-ция стереть цифру==============================================*/


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



/*============================ф-ция обрезка длиннее ли 15 символов ===========================================*/

function numCut(){


       




}


/*==================================ф-ция РАВНО==============================================*/


function myEqual(){

     var SecondNum = document.getElementById("numers").innerHTML;
     
     document.getElementById("numers").innerHTML = "0";

   
     if (flag==1) {

         var Res = Number(myNumber) + Number(SecondNum);
       
         var ResArr = String(Res).split(",");
  
         for (var i =15; i < ResArr.length; i++) {
          
                delete ResArr[i];
       
     }
         
       document.getElementById("numers").innerHTML = ResArr.join ('');

       


 
 } else if (flag==2){ki

	
      document.getElementById("numers").innerHTML = myNumber - SecondNum;

      }  else if (flag==3 && SecondNum>0){

	
       document.getElementById("numers").innerHTML = myNumber/SecondNum;

      } else if (flag==3 && SecondNum==0){

	
       document.getElementById("numers").innerHTML = "0";

      } else if (flag==4){

	
       var Res = Number(myNumber) * Number(SecondNum);
       
         var ResArr = String(Res).split(",");
  
         for (var i =15; i < ResArr.length; i++) {
          
                delete ResArr[i];
       
     }
         
       document.getElementById("numers").innerHTML = ResArr.join ('');

      } 

 
}