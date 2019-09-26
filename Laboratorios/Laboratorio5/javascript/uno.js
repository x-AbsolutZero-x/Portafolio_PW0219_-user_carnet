function uno(){
    
    let numeros=0;
    let palabras=0;
    let funciones=0;
    let objetos=0;
    let indefinido=0;
    let bandera=0;

    for(i=0; i<arguments.length; i++){
        console.log(typeof arguments[i]);
        console.log();

    if(typeof arguments.length == 'string'){
        palabras++;
    }else
    if(typeof arguments.length == 'number'){
        numeros++;
    }else
    if(typeof arguments.length == 'function'){
        funciones++;
    }else
    if(typeof arguments.length == 'object'){
        objetos++;
    }else
    if(typeof arguments.length == 'undefined'){
        indefinido++;
    }else
    if(typeof arguments.length == 'boolean'){
        bandera++;
    }

    }    

    console.log("Palabras:" + palabras);

    console.log("Numeros:" + numeros);
    
    console.log("Funciones:" + funciones);
 
    console.log("Objetos:" +objetos);
 
    console.log("Indefinidos:" +indefinido);
 
    console.log("Bandera:" +bandera);
 
}