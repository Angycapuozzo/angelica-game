function dammiNumeroCasuale(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

let numeroDaIndovinare = dammiNumeroCasuale(1, 100)

let tentativi = 10;


function checkNumber() {

    tentativi-- 

    let numeroUtente = document.getElementById("inputNumber").value
    numeroUtente = Number(numeroUtente);
    document.getElementById("tentativi").innerHTML = "Numero tentativi rimasti " + tentativi


    if (numeroUtente === numeroDaIndovinare) {
        alert("Complimenti! Hai indovinato il numero.");
        reset();
        return;
    } else if (numeroUtente < numeroDaIndovinare) {
        alert("Il numero da indovinare è più alto.");
    } else {
        alert("Il numero da indovinare è più basso.");
    }


    if (tentativi == 0) {
        alert(`Mi dispiace, hai esaurito i tentativi. Il numero era ${numeroDaIndovinare}`);
        reset ()
        

    }
}

function reset() {
    numeroDaIndovinare = dammiNumeroCasuale (1, 100)
    tentativi=10;
    document.getElementById("inputNumber").value = ""

 
}



