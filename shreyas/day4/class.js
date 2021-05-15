class Polygon{
     constructor(ls){
         this.ls=ls;
     }
     perimeter(){
         let sum=0;
         var i;
         for(i=0;i<this.ls.length;i++)
          sum+=this.ls[i]
        return sum;  
         
     }
         
     } 