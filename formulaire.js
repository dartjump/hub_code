
window.onload = function(){
    let sauvegarde = localStorage.getItem("tableau");
    if(sauvegarde) document.getElementById("tableau").innerHTML += sauvegarde;
}

function envoyer(){
    let valeur = document.getElementById("valeur").value;
    let heure = new Date().toLocaleTimeString();
    let colonne = document.querySelector('input[name="colonne"]:checked').value;

    let tableau = document.getElementById("tableau");
    tableau.innerHTML += `<tr>
        <td>${colonne === "A" ? heure : ""}</td>
        <td>${colonne === "A" ? valeur : ""}</td>
        <td>${colonne === "B" ? heure : ""}</td>
        <td>${colonne === "B" ? valeur : ""}</td>
    </tr>`;

    let lignesDonnees = Array.from(tableau.querySelectorAll("tr")).slice(1).map(r => r.outerHTML).join("");
    localStorage.setItem("tableau", lignesDonnees);
    return false;
}

function exporter(){
    let lignes = document.getElementById("tableau").querySelectorAll("tr");
    let csv = Array.from(lignes).map(ligne =>
        Array.from(ligne.querySelectorAll("th, td")).map(c => c.textContent).join(";")
    ).join("\n");

    let lien = document.createElement("a");
    lien.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    lien.download = "tableau.csv";
    lien.click();
}

function effacer(){
    let tableau = document.getElementById("tableau");
    let lignes = tableau.querySelectorAll("tr");
    if(lignes.length > 1) lignes[lignes.length - 1].remove();
    let lignesDonnees = Array.from(tableau.querySelectorAll("tr")).slice(1).map(r => r.outerHTML).join("");
    localStorage.setItem("tableau", lignesDonnees);
}
