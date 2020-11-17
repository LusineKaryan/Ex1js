document.write("<center>");
		/* Mettre un titre pour la table */
		document.write("<caption>Table de multiplication</caption>"); //La balise <caption> permet d'associer un commentaire à une table html.
		/* Créer la table*/
		document.write("<table border=1>");
		/* Créer la première ligne */
		document.write("<tr><td>","x","</td>");
		for(var i=1;i<=9;i++)
		document.write("<td>",i,"</td>");
	
		/* créer les autres lignes */
		for(var i=1;i<10;i++)
		{
			/* Créer la ligne numéro i */
		document.write("<tr>");
		document.write("<td>",i,"</td>");
			for(var j=1;j<=9;j++)
			{
				/* Créer la colonne numéro j */
				document.write("<td>",i*j,"</td>");
			}
		document.write("</tr>");
		}
		document.write("</table>");  //Patrick


        var th = "<th>";
		var th_ = '</th>';
		var tr = '<tr>';
		var tr_ = '</tr>';
		var td = '<td>';
		var td_ = '</td>';

		document.write("<table border=1");

 		for (i=0;i<10;i++) {
   			document.write(tr)
   			for (j=0;j<10;j++) {
     			if (!j) {
       				document.write(th);
       				if (!i) {document.write('X');}
       				else {document.write(i);}
       				document.write(th_);
     			}
     			else {
       				if (!i) {
         				document.write(td);
         				document.write(j);
         				document.write(td_);
       				}
       				else {
         				document.write(td);
         				document.write(i*j);
         				document.write(td_);
       				}
     			}
   			}
   			document.write(tr_);
 		}

 		document.write('</table>');  //Patrick