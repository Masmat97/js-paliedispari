// Funzione per generare un numero casuale tra 1 e 5
function numeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

// Chiediamo all'utente se sceglie pari o dispari
let sceltaUtente = prompt("Scegli 'pari' o 'dispari':").toLowerCase();

// Chiediamo all'utente un numero tra 1 e 5
let numeroUtente = parseInt(prompt("Scegli un numero tra 1 e 5:"));

// Verifichiamo che il numero dell'utente sia valido (tra 1 e 5)
if (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
    alert("Devi inserire un numero valido tra 1 e 5!");
} else {
    // Il computer estrae un numero casuale tra 1 e 5
    let numeroComputer = numeroCasuale();

    // Somma dei numeri
    let somma = numeroUtente + numeroComputer;

    // Verifica se la somma è pari o dispari
    let risultato = (somma % 2 === 0) ? "pari" : "dispari";

    // Mostra la somma e il numero del computer
    console.log(`Numero utente: ${numeroUtente}`);
    console.log(`Numero computer: ${numeroComputer}`);
    console.log(`Somma: ${somma} (${risultato})`);

    // Determinare il vincitore
    let messaggio;
    let paragrafoRisultato = document.getElementById("risultato");
    if (risultato === sceltaUtente) {
        messaggio = `Hai vinto! La somma è ${somma}, che è ${risultato}.`;
        paragrafoRisultato.className = "vittoria";  // Impostiamo il colore verde
    } else {
        messaggio = `Hai perso! La somma è ${somma}, che è ${risultato}.`;
        paragrafoRisultato.className = "sconfitta";  // Impostiamo il colore rosso
    }

    // Stampiamo il risultato sulla pagina
    document.getElementById("risultato").textContent = messaggio;
}