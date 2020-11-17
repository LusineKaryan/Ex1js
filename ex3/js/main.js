/*let age = parseInt(prompt("Quel est votre age?"));
    if (age <= 0) {
        alert("Vous avez mal saisi votre âge");
        age = parseInt(prompt("Veuillez saisir à nouveau votre âge"));
    } else if (1 < age < 18) {
        alert("Vous est mineur");
        age = parseInt(prompt("Veuillez saisir à nouveau votre âge"));
    } else { 
        alert("Vous pouvez entrer");
    }
*/  //Lusine
    
let userage = parseInt(prompt("Entrer votre âge"));
			if ( (isNaN(userage)) || userage <= 0 || userage > 150) {
				alert("Age non valide");
				document.write("Voulez-vous saisir correctement votre âge ? <a href='#'> [ok]</a>");	
			}
			else {
				alert(userage+ " est valide");
				document.write("Vous avez " +userage+ " ans." );	
			} //Patrick