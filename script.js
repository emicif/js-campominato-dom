console.log ('JS OK')


// creare una griglia di gioco quadrata
// ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// recupero elementi bottono da Html
const buttonEasy = document.getElementById('easy');
const buttonMedium = document.getElementById('medium');
const buttonHard = document.getElementById('hard');

buttonEasy.addEventListener ('click', () => startGame(100, 'easy'));
buttonMedium.addEventListener ('click', () => startGame(81, 'medium'));
buttonHard.addEventListener ('click', () => startGame(49, 'hard'));


function startGame (totalCell, difficolta) {
        createElementsInGrid(totalCell, difficolta);
}

//function start game
// creare una funzione per i livelli di difficoltà
function createElementsInGrid(totalCell, level) {
        const arrayBomb = generareBombe(totalCell);
        console.log('Le bombe sono queste:');
        console.log(arrayBomb);
    const griglia = document.getElementById('griglia');
    // resetto il contenuto della griglia
    griglia.innerHTML = '';
    griglia.classList.remove('game-over');
    
    //inizio il ciclo per individuare le colonne e le righe e inserirle all'interno della griglia
        for (let i = 0; i < totalCell; i ++ ){
                // CREO LA CELLA DI TIPO DIV
            const cella = document.createElement('div');
            cella.className = 'cella';
            cella.classList.add(level);
    // inserire un numero da 1 a 100 in ogni cella
            cella.innerText = (i + 1);
    // aggiungo una classe cella
            griglia.appendChild(cella);

            cella.id = 'cella-' + (i + 1);
    // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
                cella.addEventListener('click', function() { // cell.addEventListenerer ('click', () => //qua scrivo cella.classList.toggle ('bg-azzurro'));
                console.log(i + 1);
                // qui devo guardare se il + 1 è una bomba o no
                const isBomb = arrayBomb.includes(i+1); // === true
                if (isBomb) {
                        cella.classList.add('bg-red');
                        bloccoCelle ();
                }else {
                        cella.classList.add('bg-azzurro');
                }

                return isBomb;
        }
        )

        }
            
}

//creo array vuoto e inserisco i numeri se non presenti
function generareBombe (max) {
        const posizione = [];
        console.log(posizione);
        while(posizione.length < 16) {
                const numero = generateRandomNumber (1, max);
                if(!posizione.includes(numero)) {
                        posizione.push(numero)
                }
        }
        return posizione;   
}


function generateRandomNumber(min, max) {
        const range = max - min + 1;
        return Math.floor(Math.random()*range) + min;
}


// funzione bloccocelle
function bloccoCelle () {
        const griglia = document.getElementById('griglia');
        griglia.classList.add('game-over');
}


// controllo se l'utente ha cliccato una bomba
// se si ritorno true
// se no ritorno false






// ESERCIZIO
/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

*/

/* 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.

- creo array vuoto
- creo 16 numeri casuali
- Controllo se ci sono numeri casuali all'interno dell'array, altrimenti inserisco i numeri (.push)


In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, 
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
*/