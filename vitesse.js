function calcule() {
    let minutes = parseInt(document.getElementById("minutes").value);
    let secondes = parseInt(document.getElementById("secondes").value);
    let erreur = document.getElementById("erreur");

    if (isNaN(minutes) || minutes <= 0) {
        erreur.innerHTML = "⚠️ Entrez un nombre de minutes valide";
        document.getElementById("resultat").innerHTML = "";
        return;
    }

    if (isNaN(secondes)) secondes = 0;

    if (secondes < 0 || secondes > 59) {
        erreur.innerHTML = "⚠️ Les secondes doivent être entre 0 et 59";
        document.getElementById("resultat").innerHTML = "";
        return;
    }

    erreur.innerHTML = "";
    let totalMinutes = minutes + secondes / 60;
    let kmh = (60 / totalMinutes).toFixed(2);
    document.getElementById("resultat").innerHTML = kmh + " km/h";
}