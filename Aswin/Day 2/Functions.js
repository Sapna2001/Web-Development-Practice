 function factorialise(num){
     var result = 1;
     for(var i=1; i<=num;i++){
         //result=result*i;
         result*=i;
     }
     return result;
 }
 
 factorialise(7);
 console.log(factorialise(7));


