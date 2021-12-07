let prixTotal = 0;
let total = ""

let margherita = 8.5
let bolognaise = 9.5
let napoli = 9.5
let proscutto = 9.5
let solemio = 10
let ortolona = 11.5
let alsalmone = 12.5
let alPistacchio = 14.5

function ajouterPrixPizza(prixPizza, nomPizza) {
    prixTotal += prixPizza
    total += nomPizza + " + "
    console.log(total);
    prixHtml()
    ajTable(prixPizza, nomPizza)


}

function voirTotal() {
    window.alert("Le total de votre commande est de " + prixTotal + "€")
        //console.log("Le total de votre commande est de " + prixTotal + "€")
}

function reset() {
    prixTotal = 0
    total = ""
    document.getElementById("total").innerHTML = "Le total de votre commande est de " + prixTotal + "€"
    document.getElementById("totale").innerHTML = prixTotal + "€"
    document.getElementById("loicLeBg").innerHTML = ""
}

function prixHtml() {
    document.getElementById("total").innerHTML = "Le total de votre commande est de " + prixTotal + "€"
    document.getElementById("totale").innerHTML = prixTotal + "€"
}

function ajTable(prixPizza, nomPizza) {
    document.getElementById("loicLeBg").innerHTML += "<tr><td>" + nomPizza + "</td><td>" + prixPizza + "</td></tr>"
}