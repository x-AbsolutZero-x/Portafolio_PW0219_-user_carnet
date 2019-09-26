var arr=[];
function dos(arr){
    var suma=0;
    var prom=0;
    var cont=0;

    for(var i=0; i<arr.length; i++){
        suma += arr[i];
        cont++;
    }
    prom=(suma)/cont;

    console.log("Suma:" + suma);
    console.log("Promedio:" + prom);
}