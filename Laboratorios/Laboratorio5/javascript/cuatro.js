function cuatro(numero){
    valores=[];
    validacion=false;
    var numaleatorio;

    for(var i=0; i<20; i++){
        numaleatorio=(Math.floor(Math.random()*100)+1);
        valores.push(numaleatorio);
    }

    for(var j=0; j<20;i++){
        if(numero ===valores[j]){
            console.log("ganaste");
            validacion=true;
            break;
    }
}

    if(validacion==false){
        console.log("perdiste");
    }

    return valores;

}
