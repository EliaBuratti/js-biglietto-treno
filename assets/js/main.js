/*
 Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo).

Questo richiederà un minimo di ricerca nella documentazione di JS. 
*/



//prompt km + prompt età con number

const userKm = Number(prompt('Quanti km vuoi fare?'));

const userAge = Number(prompt('Quanti anni hai?'));


//valido i dati inseriti affinchè siano numeri e nel caso faccio apparire un avviso poi ricarico la pagina.

if ((isNaN(userKm)) || (userKm == "") || (userKm == "undefined")) {

    alert('Inserisci solo numeri!');
    window.location.reload();

} else if ((isNaN(userAge)) || (userAge == "") || (userAge == "undefined")) {

    alert('inserisci solo i numeri anche qua!');
    window.location.reload();
}

//costante costo al km
const priceKm = 0.21;

// variabile di sconto
let discount;


// if/else per definire gli sconti 

if (userAge < 18) { //sconto minorenni
    discount = 20;

} else if (userAge > 65) { //sconto over 65
    discount = 40;

} else { //nessuno sconto
    discount = 0;
}

//prezzo non socntato
const totalprice = userKm * priceKm; 


//calcolo il prezzo da scontare
const priceDIscount = ( totalprice * discount) / 100;

//costo del biglietto con l'eventuale sconto
const finalPrice = (totalprice - priceDIscount).toFixed(2);


//stampare risultato al massimo di due decimali

console.log(finalPrice + '€');

document.getElementById('yourCost').innerHTML = 'Il costo del tuo biglietto è: ' + finalPrice + '€';
