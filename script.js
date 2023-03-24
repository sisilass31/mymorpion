function valide(button) {
    return button.innerHTML.length == 0; //innerHTML permet de remplacer le contenu existant d'un élément par un nouveau.
} 

function symbol(btn, symbole) {
    btn.innerHTML = symbole;
}
//les conditions de victoire= [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]

// fonction permettant de trouver les conditions de victoires et d'appliquer un background color lors d'une victoire sur les 3 pions

function searchwin(pions, players, turn) {
    if (
        pions[0].innerHTML == players[turn] &&
        pions[1].innerHTML == players[turn] &&
        pions[2].innerHTML == players[turn]
    ) {
        pions[0].style.backgroundColor = "#d16b7a";
        pions[1].style.backgroundColor = "#d16b7a";
        pions[2].style.backgroundColor = "#d16b7a";
        return true;
    }

    if (
        pions[3].innerHTML == players[turn] &&
        pions[4].innerHTML == players[turn] &&
        pions[5].innerHTML == players[turn]
    ) {
        pions[3].style.backgroundColor = "#d16b7a";
        pions[4].style.backgroundColor = "#d16b7a";
        pions[5].style.backgroundColor = "#d16b7a";
        return true;
    }

    if (
        pions[6].innerHTML == players[turn] &&
        pions[7].innerHTML == players[turn] &&
        pions[8].innerHTML == players[turn]
    ) {
        pions[6].style.backgroundColor = "#d16b7a";
        pions[7].style.backgroundColor = "#d16b7a";
        pions[8].style.backgroundColor = "#d16b7a";
        return true;
    }

    if (
        pions[0].innerHTML == players[turn] &&
        pions[3].innerHTML == players[turn] &&
        pions[6].innerHTML == players[turn]
    ) {
        pions[0].style.backgroundColor = "#d16b7a";
        pions[3].style.backgroundColor = "#d16b7a";
        pions[6].style.backgroundColor = "#d16b7a";
        return true;
    }

    if (
        pions[1].innerHTML == players[turn] &&
        pions[4].innerHTML == players[turn] &&
        pions[7].innerHTML == players[turn]
    ) {
        pions[1].style.backgroundColor = "#d16b7a";
        pions[4].style.backgroundColor = "#d16b7a";
        pions[7].style.backgroundColor = "#d16b7a";
        return true;
    }

    if (
        pions[2].innerHTML == players[turn] &&
        pions[5].innerHTML == players[turn] &&
        pions[8].innerHTML == players[turn]
    ) {
        pions[2].style.backgroundColor = "#d16b7a";
        pions[5].style.backgroundColor = "#d16b7a";
        pions[8].style.backgroundColor = "#d16b7a";
        return true;
    }

    if (
        pions[0].innerHTML == players[turn] &&
        pions[4].innerHTML == players[turn] &&
        pions[8].innerHTML == players[turn]
    ) {
        pions[0].style.backgroundColor = "#d16b7a";
        pions[4].style.backgroundColor = "#d16b7a";
        pions[8].style.backgroundColor = "#d16b7a";
        return true;
    }

    if (
        pions[2].innerHTML == players[turn] &&
        pions[4].innerHTML == players[turn] &&
        pions[6].innerHTML == players[turn]
    ) {
        pions[2].style.backgroundColor = "#d16b7a";
        pions[4].style.backgroundColor = "#d16b7a";
        pions[6].style.backgroundColor = "#d16b7a";
        return true;
    }
}

// fonction permettant de trouver les conditions de victoires et d'appliquer un background color lors d'une victoire

function tiegame(pions) {
    for (let i = 0, len = pions.length; i < len; i++) {
        if (pions[i].innerHTML.length == 0) return false;
    }
    return true;
}

// permet d'afficher les messages

let Afficheur = function (element) {
    let affichage = element;

    function setText(message) {
        affichage.innerHTML = message;
    }

    return { sendMessage: setText };
};

// fonction permettant de trouver les conditions de victoires et d'appliquer un background color lors d'une victoire

function main() {
    let pions = document.querySelectorAll("#jeu button");
    let joueurs = ["X", "O"]; // 2 joueurs
    let turn = 0;
    let findujeu = false;
    let afficheur = new Afficheur(document.querySelector("#status"));
    afficheur.sendMessage(
        "le jeu peut commencer ! <br/> joueur " + joueurs[turn] + " c'est votre tour.");
    // pour chaque itérations, tant que i est inferieur à len (= pions.length) alors i s'incrémentera:
    for (let i = 0, len = pions.length; i < len; i++) {

        pions[i].addEventListener("click", function () {
            if (findujeu) return;
            console.log(pions[i]);
            if (!valide(this)) {
                afficheur.sendMessage(
                    "case occupée ! <br />joueur " + joueurs[turn] + " c'est toujours votre tour !");
            } else {
                symbol(this, joueurs[turn]);
                findujeu = searchwin(pions, joueurs, turn);

                if (findujeu) {
                    afficheur.sendMessage(
                        "Le joueur " + joueurs[turn] + ' gagné 🎉! <br /> <a href="index.html">rejouer</a>'
                    ); return;
                }
                // si il y a égalité alors il l'affiche
                if (tiegame(pions)) {
                    afficheur.sendMessage(
                        'égalité! <br/> <a href="index.html">✨ réessayer ✨</a>'
                    ); return;
                }

                turn++;
                turn = turn % 2;
                afficheur.sendMessage("joueur " + joueurs[turn] + " c'est votre tour !");
            }
        });
    }
}

main();