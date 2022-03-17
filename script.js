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
buttonHard.addEventListener ('click', () => startGame(5, 'hard'));


bombsToCreate = 16;

function startGame (totalCell, difficolta) {
        createElementsInGrid(totalCell, difficolta);

        const bombPositions = generareBombe(totalCell);
        addClickToCells(bombPositions);
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

            //cella.id = 'cella-' + (i + 1);
}
}

function addClickToCells(bombe){
        let punteggio = 0;
        const allCells = document.querySelectorAll ('.cella');
        for (let i = 0; i < allCells.length; i ++) {
                const cell = allCells[i];
                cell.addEventListener('click', ()=> {
                const gameOver = checkClick (cell, i, bombe);

                if (gameOver) {
                        bloccoCelle ();
                        showBombs(bombe);     
                } else {
                        punteggio++;
                        console.log(punteggio);
                        cell.classList.add('clicked');
                        const notCellBombs = allCells.length - bombsToCreate;
                        if (punteggio >= notCellBombs) {
                                bloccoCelle();
                                showScore(punteggio);
                        }
                }
    
            })
        } 
    }


                
function checkClick (cella, i, arrayBomb) {
        const isBomb = arrayBomb.includes(i+1); // === true
        if (isBomb) {
                cella.classList.add('bg-red');
               
        }else {   
                cella.classList.add('bg-azzurro');             
        }      
        return isBomb; 
}
  
   
 

 function showScore (points) {
        alert('Bravo! Hai fatto ' + points + ' punti!');
}
                        





//creo array vuoto e inserisco i numeri se non presenti
function generareBombe (max) {
        const posizione = [];
        console.log(posizione);
        while(posizione.length < bombsToCreate) {
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


// funzione showbombs 
function showBombs (arrayBomb) {
        //recuperare le celle
        const allCells = document.querySelectorAll ('.cella');
        //faccio un ciclo per vedere dove sono presenti le bombe
        for (let i = 1; i < allCells.length; i ++){
                //se arrayBomb include i+1
                if (arrayBomb.includes (i+1)){
                        //recupero la bomba in quella posizione con una costante
                        const bombCell = allCells[i];
                        // aggiungo classe bg-red a quella costante
                        bombCell.classList.add('bg-red');
                } 
        }        
}