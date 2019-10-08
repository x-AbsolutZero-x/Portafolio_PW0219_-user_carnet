var arr=[];
function dos(arr){
    let suma=0;
    let cont=0;

    while(cont < arr.length)
    {
     suma = suma + arr[cont];
     cont++;
    }

    let prom = suma/cont;
    console.log("La suma es: " + suma );
    console.log("El promedio: " + prom);

}

dos(arr);
