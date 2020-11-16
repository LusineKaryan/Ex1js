let age = parseInt(prompt("Quel est votre age?"));
if (age <= 0) {
    alert("Vous avez mal saisi votre âge");
    age = parseInt(prompt("Veuillez saisir à nouveau votre âge"));
} else if (1 < age < 18) {
    alert("Vous est mineur");
    age = parseInt(prompt("Veuillez saisir à nouveau votre âge"));
} else { 
    alert("Vous pouvez entrer");
}

    