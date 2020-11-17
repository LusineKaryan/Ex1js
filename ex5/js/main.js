/*document.open();
document.write('<table><tr><td>' + result + '</td></tr></table>');
document.close();*/
/*
function table() {
    document.write("<table border= \" 1 \" cellspacing= \" 0 \" cellpadding= \"2 \"align= \"center \" >")
    for (var i = 1; i < 10; i++)
    {document.write("<tr>");
    for (var j = 1; j < 10; j++)
    {document.write("<td>" + j + "&times;" + i + "=" + (i * j) + "</td>")}
    document.write("</tr>")
    }
    document.write("</table>")
    }
*/
document.write("<tr><td bgcolor='#918E8A'>X</td>"); 
for (i = 1; i <=10; i++) document.write("<td bgcolor='#918E8A'>"+i+" </td>"); 
document.write("</tr>"); 
for (i = 1; i <=10; i++) { 
document.write("<tr><td bgcolor='#918E8A'>" + i + " </td>"); 
for (j = 1; j <= 10; j++) { 
document.write("<td style='text-align:center;'>" + (i*j) + " </td>");} 
document.write("</tr>"); 
} 

/*
for (i = 1; i <=10; i++) {
    document.write("<tr><td>" + i + " </td>");
}     
for (j = 1; j <= 10; j++) { 
    document.write("<td style='text-align:center;'>" + (i*j) + " </td>");}
    document.write('<table><tr><td>' + result + '</td></tr></table>');
*/