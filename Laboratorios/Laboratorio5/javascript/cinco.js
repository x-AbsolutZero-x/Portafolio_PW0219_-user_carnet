var palabra = "";  /*ejemplo cinco("perro")-->no es palindrome
                             cinco("ana")--> si es palindrome */

function cinco(palabra)
{
    let cont = 0;
    let final = palabra.length - 1;
    var palindrome;
    palindrome = true;
    if(palabra.length%2 == 0)
    {
        while(cont < palabra.length/2)
        {
         
         if(palabra[cont] == palabra[final])
         {
         palindrome = true;
         }
         else{
         palindrome = false;
         }
         cont++;
         final--;
        }
    }
    else{
        while(cont < (palabra.length/2) + 0.5 && palindrome == true)
        {
         
         if(palabra[cont] == palabra[final])
         {
         palindrome = true;
         }
         else{
         palindrome = false;
         }
         cont++;
         final--;
        }
    }
    
    if(palindrome == true)
    {
        console.log("La palabra es palindrome");
    }
    else{
        console.log("La palabra no es palindrome");
    }
}
cinco(palabra);