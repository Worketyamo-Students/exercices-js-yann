// perimètre du carré
let coter1 = 20
let coter2 = 20
let coter3 = 20
let coter4 = 20

let perimètre = coter1 + coter2 + coter3 + coter4
console.log(perimètre, "perimètre du carré")

// surface du rectangle
let base = 15
let hauteur = 15

let surface = base * hauteur / 2
console.log(surface, "surface du rectangle")

// aire de la pyramide
let haut = 125

let volume = perimètre * haut / 2
console.log(volume, "volume de la pyramide")

// les opérateurs en javascripts

let x = 15
let y = 30 

let sup = x > y
console.log("comparaison de la superioriter de x par rapport a y :", sup)

let inf = x < y
console.log("comparaison de l'inferioriter' de x par rapport a y :", inf)

let egal = x == y
console.log("comparaison de l'egaliter de x par rapport a y :", egal)

let supeg = x >= y
console.log("comparaison de x superieur ou egal a y:", supeg)

let infeg = x <= y
console.log("comparaison de x inferieur ou egal a y :", infeg)

let diff = x != y
console.log("comparaison de la difference entre x et y :", diff)

//operateur logique

let  etlo = (sup && inf)
console.log("comparaison de la veracite de deux operations :", etlo)

let oulo = (sup || inf)
console.log("comparaison de la veracite de l'une des deux operations deux operations :", oulo)

let etlo1 = (sup && egal)
console.log("comparaison de la veracite de l'une des deux operations deux operations :", etlo1)

let oulo1 = (sup || egal)
console.log("comparaison de la veracite de l'une des deux operations deux operations :", oulo1)

let etlo2 = (sup && supeg)
console.log("comparaison de la veracite de l'une des deux operations deux operations :", etlo2)

let oulo2 = (sup || supeg)
console.log("comparaison de la veracite de l'une des deux operations deux operations :", oulo2)

//fonction en javascript

//perimetre et demi-perimetre
function rectangle(L, l){
    p = (L + l )* 2
    dp = p / 2
    hyp = (L*L)+(l*l)
    return[p, dp, hyp];
}
const [perimetre, demiperimetre, hypothenus] = rectangle(15, 8);
console.log(perimetre); 
console.log(demiperimetre);
console.log(hypothenus)

// fonctions avec conditions de realisation

// Exercice 1 : Variables et Constantes
let nom = prompt("Entrez votre nom :");
const age = prompt("Entrez votre âge :");
console.log("Bienvenue", nom, "vous avez", age, "ans");

// Exercice 2 : Fonctions Basique et Paramètres de Fonctions
function CoutTotal(cout, nbreParticipants) {
    return cout * nbreParticipants;
}
console.log("le Coût total est :", CoutTotal(50, 10));

// Exercice 3 : Conditions if..else
function verifierReduction(age) {
    if (age < 18) {
        console.log("Vous êtes éligible à une réduction.");
    } else {
        console.log("Vous n'êtes pas éligible à une réduction.");
    }
}
verifierReduction(18);

// Exercice 4 : Utilisation de Math
let note1 = parseFloat(prompt("Entrez la première note :"));
let note2 = parseFloat(prompt("Entrez la deuxième note :"));
let note3 = parseFloat(prompt("Entrez la troisième note :"));
let moyenne = Math.round((note1 + note2 + note3) / 3 * 100) / 100;
console.log("Moyenne des notes est :", moyenne);

// Exercice 5 : String, Number, et Boolean
let nomParticipant = "Yvanov";
let ageParticipant = 19;
let inscriptionPayee = true;
console.log(typeof nomParticipant, typeof ageParticipant, typeof inscriptionPayee);

// Exercice 6 : Tableaux (Array)
let participants = ["Alice", "Bob", "Charlie"];
participants.push("David");
console.log("Liste des participants :", participants);

// Exercice 7 : Alert, Prompt, et Console.log()
let nouvelInscrit = prompt("Entrez le nom du nouvel inscrit :");
alert(`Bienvenue : ${nouvelInscrit} !`);
console.log("Bienvenue", nouvelInscrit, "sur notre page d'accueill !");


// calculde la somme de deux nombres
function calculateSum(a, b){
    somme = a + b
    return  somme
}
console.log(calculateSum(10, 65))

// calcul de la moyenne des notes des participants
function calculateAverage(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
let notes = [15, 18, 12, 20, 10];
console.log(calculateAverage(notes));

// convertir une chaine de caractère en majuscule
function convertToUpperCase(str) {
    return str.toUpperCase();
}
console.log(convertToUpperCase("hello world"));

//calculer l'aire d'un rectangle
function calculateRectangleArea(long, larg){
    aire = long * larg
    return aire
}
console.log(calculateRectangleArea(12, 15))

// determiner si un nombre est paire ou impaire
function isEven(a){
    return a % 2 ===0
}
console.log(isEven(4))

// rechercher un element dans un tableau
function findElement(arr, element) {
    return arr.includes(element);
}
console.log(findElement(["apple", "banana", "pomme"], "orange")); 

// calculer le nombre de fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));

// calculer le factorielle d'un nombre
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));




