const newLocal = document.getElementById("searchInput");
// Obtient la référence de l'élément input de recherche
var searchInput = newLocal;

// Écoute l'événement de saisie dans le champ de recherche
searchInput.addEventListener("input", function () {
    var searchValue = searchInput.value.trim().toLowerCase();

    // Réinitialise le tableau avant d'appliquer le filtre
    tableBody.innerHTML = "";

    // Parcourt le tableau d'étudiants et construit les lignes du tableau pour les étudiants filtrés
    etudiants.forEach((etudiantListe) => {
        var etudiantName = (`${etudiantListe.nom} ${etudiantListe.prenom}`).toLowerCase();

        if (etudiantName.includes(searchValue)) {
            var tableau = document.createElement("tr");
            tableau.innerHTML = "<td>" + etudiantListe.nom + "</td>" +
                "<td>" + etudiantListe.prenom + "</td>" +
                "<td>" + etudiantListe.âge + "</td>" +
                "<td>" + etudiantListe.note + "</td>";
            tableBody.appendChild(tableau);
        }
    });

    // Vérifie s'il n'y a pas de résultats correspondant à la recherche
    if (tableBody.children.length === 0) {
        var accunResultat = document.createElement("tr");
        accunResultat.innerHTML = "<td colspan='4'>Aucun résultat trouvé.</td>";
        tableBody.appendChild(accunResultat);
    }
});

var etudiants = [
    { nom: "Diouf", prenom: "Salif", âge: 20, note: 16 },
    { nom: "Kane", prenom: "Amadou", âge: 22, note: 18 },
    { nom: "Diallo", prenom: "Booba", âge: 19, note: 13 },
    { nom: "Balde", prenom: "Oumar", âge: 28, note: 14.75 },
    { nom: "Ndiaye", prenom: "Mohammed", âge: 26, note: 11 },
    { nom: "Gome", prenom: "Ousman", âge: 25, note: 17.5 },
    { nom: "Ly", prenom: "Alioune", âge: 20, note: 12.5 },
    { nom: "Ka", prenom: "Karim", âge: 26, note: 13.25 },
    { nom: "Ba", prenom: "Souleymane", âge: 24, note: 14 },
    { nom: "Sy", prenom: "Moussa", âge: 21, note: 16.75 },
];

var tableBody = document.getElementById("etudiantTableBody");

etudiants.forEach(function (etudiantListe) {
    var tableau = document.createElement("tr");
    tableau.innerHTML = `<td>${etudiantListe.nom}</td>
                             <td>${etudiantListe.prenom}</td>
                             <td>${etudiantListe.âge}</td>
                             <td>${etudiantListe.note}</td>`;
    tableBody.appendChild(tableau);
});

// Trouver l'étudiant avec la plus grande note
var etudiantNotePlus = etudiants.reduce(function (prev, current) {
    return (prev.note > current.note) ? prev : current;
});

// Trouver l'étudiant avec la plus faible note
var etudiantNoteFaible = etudiants.reduce(function (prev, current) {
    return (prev.note < current.note) ? prev : current;
});

// Trouver l'étudiant le plus âgé
var etudiantAgePlus = etudiants.reduce(function (prev, current) {
    return (prev.âge > current.âge) ? prev : current;
});

// Trouver l'étudiant le moins jeune
var etudiantAgeMoins = etudiants.reduce(function (prev, current) {
    return (prev.âge < current.âge) ? prev : current;
});

// Ajouter les informations supplémentaires au tableau
let tableClasseur = document.createElement("tr");
tableClasseur.innerHTML = "<td colspan='4'><strong>Classement des Etudiants</strong></td>";
tableBody.appendChild(tableClasseur);

let grandeNote = document.createElement("tr");
grandeNote.innerHTML = "<td>" + etudiantNotePlus.nom + "</td>" +
    "<td>" + etudiantNotePlus.prenom + "</td>" +
    "<td>" + etudiantNotePlus.âge + "</td>" +
    "<td>" + etudiantNotePlus.note + "</td>";
tableBody.appendChild(grandeNote);

let petiteNote = document.createElement("tr");
petiteNote.innerHTML = "<td>" + etudiantNoteFaible.nom + "</td>" +
    "<td>" + etudiantNoteFaible.prenom + "</td>" +
    "<td>" + etudiantNoteFaible.âge + "</td>" +
    "<td>" + etudiantNoteFaible.note + "</td>";
tableBody.appendChild(petiteNote);

let grandAge = document.createElement("tr");
grandAge.innerHTML = "<td>" + etudiantAgePlus.nom + "</td>" +
    "<td>" + etudiantAgePlus.prenom + "</td>" +
    "<td>" + etudiantAgePlus.âge + "</td>" +
    "<td>" + etudiantAgePlus.note + "</td>";
tableBody.appendChild(grandAge);

let petitAge = document.createElement("tr");
petitAge.innerHTML = "<td>" + etudiantAgeMoins.nom + "</td>" +
    "<td>" + etudiantAgeMoins.prenom + "</td>" +
    "<td>" + etudiantAgeMoins.âge + "</td>" +
    "<td>" + etudiantAgeMoins.note + "</td>";
tableBody.appendChild(petitAge);