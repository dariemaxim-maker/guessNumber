let random = Math.floor(Math.random() * 101);
let tentativi = 7;
let cronologiaNumeri = [];

function iniziaGioco() {
    document.getElementById("win").classList.remove("d-none");
}

function guessNumber(){
    let input = document.getElementById("num");
    let n = parseInt(input.value);

    if (isNaN(n) || n < 0 || n > 100) {
        alert("Inserisci un numero valido tra 0 e 100!");
        return;
    }

    if (tentativi > 0) {
        cronologiaNumeri.push(n);
        tentativi--;
        
        document.getElementById("tentativi").innerHTML = tentativi;
        document.getElementById("numeriInseriti").innerHTML = cronologiaNumeri.join(" - ");

        if (n === random) {
            let div = document.getElementById("win");
            div.style.backgroundColor = "green";
            div.innerHTML = "HAI VINTO! 🎉";
            input.disabled = true;
        } else if (n < random) {
            let p = document.getElementById("suggerimento");
            p.innerHTML = "Il numero è più grande 📈";
        } else {
            let p = document.getElementById("suggerimento");
            p.innerHTML = "Il numero è più piccolo 📉";
        }

        if (tentativi === 0 && n !== random) {
            let p = document.getElementById("suggerimento");
            p.innerHTML = `HAI PERSO! Il numero segreto era ${random} 😢`;
            input.disabled = true;
        }
    }
    
    input.value = "";
    input.focus();
}