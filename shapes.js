const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


//--------------- HEART ---------------------
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(75, 40);
ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.fill();



//--------------- PERSON TALKING ------------------
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
// Dessiner le corps de la personne
ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
// Dessiner la tête de la personne
ctx.beginPath();
ctx.arc(75, 45, 20, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
// Dessiner la bouche de la personne
ctx.beginPath();
ctx.arc(75, 55, 10, 0, Math.PI, false);
ctx.stroke();
// Dessiner les yeux de la personne
ctx.beginPath();
ctx.arc(65, 40, 5, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(85, 40, 5, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
// Dessiner la bulle de dialogue
ctx.beginPath();
ctx.moveTo(150, 40);
ctx.lineTo(130, 20);
ctx.lineTo(50, 20);
ctx.lineTo(50, 70);
ctx.lineTo(130, 70);
ctx.lineTo(150, 50);
ctx.closePath();
ctx.fill();
ctx.stroke();
// Dessiner le texte dans la bulle de dialogue
ctx.font = "bold 14px Arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Hello, comment vas-tu ?", 100, 45);



//---------------- CROSS ------------------------
ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
// Dessiner la ligne verticale de la croix
ctx.beginPath();
ctx.moveTo(75, 0);
ctx.lineTo(75, 150);
ctx.stroke();
// Dessiner la ligne horizontale de la croix
ctx.beginPath();
ctx.moveTo(0, 75);
ctx.lineTo(150, 75);
ctx.stroke();