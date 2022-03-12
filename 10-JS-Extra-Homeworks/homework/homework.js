// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  // return Object.entries(objeto); asi lo hice yo
  var newA=[];
  var keys=Object.keys(objeto);
  var values= Object.values(objeto);

  for(var i=0; i<keys.length;i++){
    for(j=0;j<values.length;j++){
      newA.push([keys[i],values[j]]);
      i++
    }
  }
    return newA;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
   var obj= {}
   for (var i=0; i<string.length;i++){
     var letra =string.charAt(i);
     if(letra===" ") continue;
     if(obj[letra]) obj[letra] ++;
     else(obj[letra]= 1)
   }
   return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var conver=s.split("");
  var mayuscula=[];
  var minuscula=[];
  for(var i =0;i<conver.length;i++){
    if(conver[i]=== conver[i].toUpperCase()){
      mayuscula.push(conver[i]);
    }else{
      minuscula.push(conver[i]);
    }
  }
    return mayuscula.join("") +minuscula.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var conver=str.split(" ")
 var fraseinvertida=[];
    for( var i=0;i<conver.length;i++){
      fraseinvertida.push(conver[i].split("").reverse().join(""));
    }
 return fraseinvertida.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
 var num=numero.toString();
 var numinvertido=num.split("").reverse().join("");
   if(num===numinvertido){
     return "Es capicua";
    }else{
      return "No es capicua"
    }
  
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
   var sinABC= "";

   for(var i=0;i<cadena.length;i++){
     if(cadena[i]==="a" || cadena[i]==="b"|| cadena[i]==="c"){
       continue;
     }else{
        sinABC += cadena[i];
     }
   }
  
   return sinABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var cambio=true;
  while(cambio){
    cambio= false;
    for( var i=0; i<arr.length;i++){
      if( arr[i].length > arr[i+1].length){
        var aux=arr[i];
        arr[i]=arr[i+1]
        arr[i+1]= aux;
        cambio= true;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var elemtos=[];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i]===arreglo2[j]){
        elemtos.push(arreglo2[j])
      }
      
    }
    
  }
  return elemtos;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

