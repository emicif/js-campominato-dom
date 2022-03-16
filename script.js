console.log ('JS OK')


// creare una griglia di gioco quadrata
// ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// recupero elementi bottono da Html
const buttonEasy = document.getElementById('easy');
const buttonMedium = document.getElementById('medium');
const buttonHard = document.getElementById('hard');

buttonEasy.addEventListener ('click', () => createElementsInGrid(100, 'easy'));
buttonMedium.addEventListener ('click', () => createElementsInGrid(81, 'medium'));
buttonHard.addEventListener ('click', () => createElementsInGrid(49, 'hard'));




// creare una funzione per i livelli di difficoltà
function createElementsInGrid(totalCell, level) {
    const griglia = document.getElementById('griglia');
    // resetto il contenuto della griglia
    griglia.innerHTML = '';
    
    //inizio il ciclo per individuare le colonne e le righe e inserirle all'interno della griglia
        for (let i = 0; i < totalCell; i ++ ){
            const cella = document.createElement('div');
            cella.className = 'cella';
            cella.classList.add(level);
    // inserire un numero da 1 a 100 in ogni cella
            cella.innerText = (i + 1);
    // aggiungo una classe cella
            griglia.appendChild(cella);

    // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
            cella.addEventListener('click', function() { // cell.addEventListenerer ('click', () => //qua scrivo cella.classList.toggle ('bg-azzurro'));
            cella.classList.toggle ('bg-azzurro');
            }
            )
        }
}

















