  

<header style="text-align: center;"><h1>
Используйте консоль браузера для того ,чтобы посчитать код Голомба.<br> Golomb(n/m)</h1>
</header>


<script>
  

  function  dec_to_bin(x) {
    var bin = "";//  
     do { 
        bin =    (x % 2)  + bin ;
         } 
        while ((x >>= 1) > 0); 
    return bin ;
}
function unar(r){
  result = (new Array(r+1).join(1) + 0); 
    return result;
}

 

 
 
    
     

  function  Golomb(n,m) 
   {
 
  var a= Math.floor(n/m);
  var b = n % m ;
  var r = n % m;
  var j = Math.log2(m);
  var arrr = [];
  var ar = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];
  //var nameL = 0;
 
  j = Math.ceil(j);
  a = unar(a);
 
  if ( m == 2 || m == 4 || m == 8 || m == 16 || m == 32 || m == 64 || m == 128) {
    arrr= [dec_to_bin(b)];
    nameL = arrr.map(function(size){
      return size.length; });
    

    ar.length = (Math.log2(m) - nameL[0]);
    ar.push(dec_to_bin(b));
    return a + ar;
    }








     else if (    r < (Math.pow(2,j)) - m    ){

       
       arrr = [dec_to_bin(r)];
       nameL = arrr.map(function(size){
      return size.length; });

    ar.length = ((j-1) - nameL[0]);
    ar.push(dec_to_bin(r));
    return a + ar;




    } else    l = r + Math.pow(2,j) - m   

     l = dec_to_bin(l);

return a + l  ;

  }
  
 </script>
