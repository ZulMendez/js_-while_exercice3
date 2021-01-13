// - ##  Ex 01
//     ## Créer un tableau de 9 prénoms 
//     ## Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
//     ## Astuce : let i = 0;
//     ## Astuce 2 : (i < 9)
// let noms = ['anne', 'alicia', 'julian', 'marc', 'lisa', 'marc', 'valentin', 'sarah', 'oscar'];

// for (let i = 0; i < 9; i++) {
//     // const element = noms[i];
//     console.log(`Bonjour ${noms[i]}`);
// }
// var i = 0;
// do {
    // let noms = ['anne', 'alicia', 'julian', 'marc', 'lisa', 'marc', 'valentin', 'sarah', 'oscar'];
//     console.log(`Bonjour ${noms[i]}`);
//     i++
// } while (i < 9);

// - ##  Exo 02
//     ## Créer un tableau de 6 fruits
//     ## Avec l'aide d'une boucle while vider le tableau.
//     ## Utilisez fruits.length
//     let fruits = ['banane', 'pomme', 'poire', 'orange', 'melon', 'citron'];
// var i = 0;
// while (fruits.length > 0) {
//     fruits.splice(i, 1);
//     console.log(fruits);
//     i--
// }
// var i = 0 
//    do {
//        fruits.splice(i, 1)
//        console.log(fruits);
//        i--;
//    } while (fruits.length > 0);

// - ##  Exo 03
//     ## Créer un tableau de 4 légumes du nom de 'panierLegumes'
//     ## Stocker la longueur du tableau dans une variable du nom de 'longeur'
//     # Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'
// let panierLegumes = ['oignon', 'patate', 'carotte', 'courgette'];
// let caisseLegumes = [];

// do {
//     var i = 0;
//     var longeur = panierLegumes.length;
//     caisseLegumes.push([i]) 
//     panierLegumes.splice(i, 0)
//     console.log(panierLegumes);
//     console.log(caisseLegumes);
//     i--;
// } while (longeur <= 0);


// - ##  Exo4
//     ##  Préparer une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite
// let quest = prompt('capital de la Belgique?');
// let rep = 'bruxelles';

// while (quest !== rep) {
//     if (quest == rep) {
//         alert('felicitations!')
//     } 
//     else {
//         prompt('reesayez');
//     }
// }
// - ##  Exo5
//     ##  Re faire l'exo 4 avec DO WHILE

// let rep = 'bruxelles'
// do {
//     var quest = prompt('capital de la belgique?');
//     if (quest === rep) {
//         alert('felicitation!');
//     } else {
//         alert('reesayez')
//     }
// } while (quest !== rep);


// - ##  Exo6
//     ## Créer une variable avec l'année actuelle
//     ## Créer un programme qui génère une année de façon aléatoire entre 1970 et 2018. L’utilisateur doit donner le bon age en répondant à la question suivante
//     ## : “Si je suis née en 1988(année généré aléatoirement), quel age ai-je aujourd’hui ? ”
//     ## L’utilisateur a trois essais. S’il donne la bonne réponse, on sort et s’il arrive à trois essaies on sort également.
//     ## Finir avec un affichage.
let an = 2021;
let ageAleatoire = Math.floor(Math.random() * (2021 - 1970)) + 1970;
let result = an - ageAleatoire;
let ask;
let x = 0; 

do {
    ask = prompt(`si je suis née en ${ageAleatoire}, quel age ai-je aujourd'hui?`);
    if (ask == result) {
        alert('bravo');
    } else if (x == 2) {
        alert('reesaye');
    } else {
    alert('dommage')
}
    x++
} while (x <= 2 && ask != result);


// - ##  Exo7 
//     ## Demandez a l'utlisateur de remplir un panier de fruit jusqu'a en obtenir 8
//     ## Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit
//     ## Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit "Merci bon appetit"
//     ## Chaque fruit entré par l'utilisateur doit finir par etre ortographié avec une premiere lettre majuscule et le reste en minuscule 
//     ## Lui montrer son panier avec la première lettre en majuscule
    
// let pannierFruits = [];
// let addFruit;
// while (pannierFruits.length < 8) {
//     addFruit = prompt("Entrez un fruit dans le pannier");
//     addFruit = addFruit.charAt(0).toUpperCase()+addFruit.substr(1).toLowerCase();
//     pannierFruits.push(addFruit);
// };
// console.log(pannierFruits);

// let delFruit = prompt("Voulez-vous retirer un fruit du pannier? Entrez le nom du fruit que vous voulez retirer: ");
// delFruit = delFruit.charAt(0).toUpperCase()+delFruit.substr(1).toLowerCase();

// if (pannierFruits.includes(delFruit)) {
//     while ( pannierFruits.includes(delFruit) ) {
//         console.log('test');
//         delFruit = delFruit.charAt(0).toUpperCase()+delFruit.substr(1).toLowerCase();
//         pannierFruits.splice(pannierFruits.indexOf(delFruit), 1);
//         console.log(pannierFruits);
//         delFruit = prompt("Voulez-vous retirer un autre fruit du pannier? Entrez le nom du fruit que vous voulez retirer: ");
//         delFruit = delFruit.charAt(0).toUpperCase()+delFruit.substr(1).toLowerCase();
//     };
// } else {
//     console.log('merci bon app');
// }


