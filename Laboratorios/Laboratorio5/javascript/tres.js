var arr = [];
function tres(arr, acc)
{
    let suma = 0;
    let cont = 0;
    while(cont < arr.length)
    {
     if(arr[cont] === acc)
     {
         suma++;
     }
     cont++;
    }
    
    console.log("La ocurrencia es de: " + suma);
}
tres(arr,); /*Ingreso de arreglo ejemplo---> tres([1,2,3,4,2,3,2],2);  */