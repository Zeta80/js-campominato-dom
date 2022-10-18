
const startGameBtn = document.getElementById("play-button");
const containerRow = document.getElementById("container-row");
const contWin = document.getElementById("cont-text-win")
const contLose = document.getElementById("cont-text-lose")
const spanMessage = document.getElementById("counter-tentative")
let gameLost = !true;
console.log(contLose);

//  Creare l'array con numeri casuali da 1 a 100
startGameBtn.addEventListener("click", function () {
    const squaresNumber = 100;
    const bombsNumbers = [];
    const counterTentative = [];
    const generatedNumbers = generateRandomOrderArray(squaresNumber);
    let gameLost = !true;
    contLose.classList.add("hidden")

    document.querySelector(".row").innerHTML = "";

    //ciclo while per generare numericamente le 16 bombe che mi sergvono per il gioco
    do {
        let randomBomb = getRndInteger(1, 100)
        console.log(randomBomb);

        if (!bombsNumbers.includes(randomBomb)) {
            bombsNumbers.push(randomBomb)
        }

    } while (bombsNumbers.length !== 16);
    console.log(bombsNumbers);



    //  Per ogni numero creo un elemento square e lo insersco nella --griglia
    const row = document.querySelector(".row");

    for (let i = 0; i < generatedNumbers.length; i++) {
        const thisNumber = generatedNumbers[i];
        // Creo un elemnto square
        const thisSquare = createSquare(thisNumber);
        // aggiungo eventListener allo square creato
        thisSquare.addEventListener("click", handleSquareClick);
        // inserisco l'elemento nel DOM
        row.append(thisSquare);
    }


    //quando il gioco finisce restituisco output di scritta 



    // FUNCTIONS
    // /**
    //  * Description Genera un numero random in range tra min e max (inclusi)
    //  * @param {number} min
    //  * @param {number} max
    //  * @returns {number} un numero intero generato in modo random
    //  */
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * Description: La funzione che genera tutti i numeri da 1 a arrayLength in ordine casuale senza numeri doppi
     * @param {number} arrayLength
     * @returns {Array} Array di numeri in ordine casuale di lunghezza arrayLength
     */
    function generateRandomOrderArray(arrayLength) {
        const numbersArray = [];
        while (numbersArray.length < arrayLength) {
            const rndNumber = getRndInteger(1, arrayLength);
            if (!numbersArray.includes(rndNumber)) {
                numbersArray.push(rndNumber);
            }


        }
        return numbersArray;
    }

    // UI FUNCTIONS
    /**
     * Description: La funzione che crea l'elemento square da inserire nel dom
     * @param {number} innerNumber -> numero da inserire all'interno del square
     * @returns {object} elemento DOM che rappresenta lo square
     */
    function createSquare(innerNumber) {
        const newSquare = document.createElement("div");
        // METTERE IF
        newSquare.classList.add("tenxten");
        newSquare.classList.add("col");
        newSquare.innerHTML = innerNumber;
        return newSquare;
    }


    /**
     * Description: La funzione che aggiunge il colore azzurro al click sullo square
     */
    function handleSquareClick() {
        if (!gameLost) {
            const clickedNumber = parseInt(this.textContent);
            console.log(clickedNumber);
            console.log(bombsNumbers);
            counterTentative.push(clickedNumber);
            if (bombsNumbers.includes(clickedNumber)) {
                this.classList.add("bomb");
                gameLost = true
                contLose.classList.remove("hidden")
                spanMessage.innerHTML = `hai usato ${counterTentative.length - 1} tentativi`
                console.log(counterTentative, "ciao");
            } else {
                this.classList.add("blu");
            }
        }

    }

    containerRow.classList.remove("hidden");

});
// JAVASASSONE 🗿☜(ﾟヮﾟ☜)