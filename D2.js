/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 5
let number2 = 10 
if(number1 > number2) {
 console.log('10 è il più grande')
}
else (number1 < number2) {
  console.log('il numero 10 è il maggiore')
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if(numero1 !== 5) {
  console.log('not equal')
}

// let x2 = 6
// if (x2 !== 5) {
  // console.log("not equal")
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if (numero1 % 5 === 0) {
  console.log('divisibile per 5')
}
// let x3 = 66
// if (x3 % 5 === 0) {
  // console.log ('divisibile per 5')

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number3 = 12
const number4 = 4
if (number3 - number4 === 8 || number3 + number4 ===8) 
{
  console.log( ' la sottrazione è uguale a 8')
}
else if (number3 || number4 === 8) {
console.log('uno dei due numer è uguale a 8')
}

//  let z1 = 10
// let z2= 2
//if () z1 === 8 ||z2 === 8 || z1 + z2 === 8 || z1 - z2 === 8 ) {
  // console.log ("verificato")
// }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCar = 30

if(totalShoppingCar < 50) {
  console.log( "l'utente ha la spedizione gratuita", totalShoppingCar)
}
else {
  console.log( "l'utente spende 10 di spedizione", totalShoppingCar + 10)
}

//  let totalShoppingCar = 70
// let shippingCost = 10
// let totalToPay
// if (totalShopping > 50) {
// totaltoPay - totalShoppingCar
// } else {
  // totaltoPay - totalShoppingCar + shippingCost
// }


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let blackFriday = totalShoppingCar - ( totalShoppingCar * 20/100)

if(blackFriday > 50) {
  console.log( "l'utente ha la spedizione gratuita", blackFriday)
}
else {
  console.log( "l'utente spende 10 di spedizione", blackFriday + 10)
}

// let totalShoppingCar = 40
// let shippingCost = 10
// let totaltoPay
// if (totalShoppingCar * 0.8 > 50) {
  // totaltoPay - totalShoppingCar
// } else { totaltoPay - totalShoppingCar + shippingCost}
// console.log( 'totaltoPay' , totaltoPay)


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let var1 = 9
let var2 = 2
let var3 = 4

if( var1 > var2 && var2 > var3 )
{
  console.log (var1, var2, var3)
}
else if ( var1 > var3 && var3 > var2 )
{
  console.log (var1, var3, var2)
}
else if( var2 > var1 && var1 > var3 )
{
  console.log (var2, var1, var3)
}
else if( var2 > var3 && var3 > var1 )
{
  console.log (var2, var3, var1)
}
else if( var3 > var1 && var1 > var2 )
{
  console.log (var3, var1, var2)
}
else if( var3 > var2 && var2 > var1 )
{
  console.log (var1, var3, var2)
}




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let nume = 7
console.log(typeof nume)

//  let val = 'Ciao'
// if ( typeof val === "number") {
// console.log("val è un numero")
// } else {
  // console.log("val non è un numero")
// }



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if (var1 %2 === 0) {
  console.log('numero pari')
}
 else {
  console.log('numero dispari')
}


//  let num = 577
//  if(num % 2 === 0) {
  // console.log ("il numero è pari")

//  } else {
  // console.log("il numero è dispari")
//  }


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let val = 2
if (val < 10 && val >- 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }


  // let val2 = 3
  // if (val2 < 5) {
    // console.log("meno di 5")
  // } else if (val2 < 10) {
    // console.log ( "meno di  10")
  // } else {
    // console.log( "uguale a 10 o maggiore")
  // }
  
 

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
console.log("John", me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log("John", me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log("me", me)

// me.skills.splice(2,1) oppure me.skills.splice(me.skills.length -1, 1)  oppure me.skills.splice(-1)
// console.log("me", me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myArray = []
myArray.push (1)
myArray.push (2)
myArray.push (3)
myArray.push (4)
myArray.push (5)
myArray.push (6)
myArray.push (7)
myArray.push (8)
myArray.push (9)
myArray.push (10)
console.log("il mio Array", myArray)



// oppure myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// console.log ('myArray', myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
myArray.splice(9, 1, 100)


// myArray[9] -100
// console.log(myArray)