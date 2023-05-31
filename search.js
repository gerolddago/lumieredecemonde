let inCanvas = random(25,canvas.width - (canvas.width / 5));

function random(min, max){
    return Math.random() * (max - min) + min ;
}

function rectangle (){
    canvas.isDrawingMode = false;
    const rectangle = new fabric.Rect({
        left: random(30,420),
        top: random(30,420),
        width: random(10,70),
        height: random(10,70),
        fill: 'transparent',
        stroke: 'white',
        strokeWidth: 7,
    });
    canvas.add(rectangle);
}

function circle (){
    canvas.isDrawingMode = false;
    const circle = new fabric.Circle({
        left: 70,
        top: 70,
        radius: 20,
        fill: 'transparent',
        stroke: 'white',
        strokeWidth: 7,
    });
    canvas.add(circle);
}

function text (textHere){
    canvas.isDrawingMode = false;
    const text = new fabric.IText(textHere, {
        left: random(130,canvas.width - (canvas.width / 1.7)),
        top: random(70,canvas.height - (canvas.height / 3.5)),
        objecttype: 'text',
        // fontFamily: 'macondo',
        fontFamily: 'Roboto',
        fill: 'white',
        fontSize: 20,
        textAlign: 'center',
    });
    canvas.add(text);
}

/*function cross(){
    canvas.isDrawingMode = false;
    canvas.fillStyle = "white",
    canvas.strokeStyle = "white",
    canvas.lineWidth = 5,
    // Dessiner la ligne verticale de la croix
    ctx.beginPath(),
    ctx.moveTo(75, 0),
    ctx.lineTo(75, 150),
    ctx.stroke(),
    // Dessiner la ligne horizontale de la croix
    ctx.beginPath(),
    ctx.moveTo(0, 75),
    ctx.lineTo(150, 75),
    ctx.stroke();
}*/

const image = 'img/square.webp';
function generateImage() {
    canvas.isDrawingMode = false;
    fabric.Image.fromURL(image, function(img){
        img.set({
            top:150, 
            left:168,
        });
        img.scaleToHeight(125);
        img.scaleToWidth(125);
        //img.rotate(45);
        canvas.add(img);
    });
}

//---------------------------------------------------------------



// Définir le dictionnaire
var dictionnaire = {
    "Jean1:1": "Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu",
    "Jean1:2": "Elle était au commencement avec Dieu",
    "Jean1:3": "Toutes choses ont été faites par elle, et rien de ce qui a été fait n'a été fait sans elle",
};


function getText() {
    const inputElement = document.getElementById("inputText");
    const inputValue = inputElement.value;
    console.log(`Le texte saisi est : ${inputValue}`);

    // Définir la clé à chercher
    var cleCherchee = inputValue;
    var hasard = 1;
    // Rechercher la clé dans le dictionnaire
    if (hasard == 0 && dictionnaire.hasOwnProperty(cleCherchee)) {
        // Récupérer la valeur associée à la clé trouvée
        var valeur = dictionnaire[cleCherchee];

        // Diviser la valeur en mots
        var mots = valeur.split(" ");
        
        // Créer un objet Set pour stocker les mots sans répétition
        var motsUniques = new Set();

        // Ajouter les mots dont le nombre de lettres est supérieur à 3 à l'ensemble
        for (var i = 0; i < mots.length && motsUniques.size < 7; i++) {
            if (mots[i].length > 3) {
            motsUniques.add(mots[i]);
            }
        }

        // Afficher les mots de l'ensemble
        generateImage();
        motsUniques.forEach(function(mot) {
            console.log(mot);
            // Les ajouter à un tableau
            //prompt(mot);
            function drawWords(){
                if (mot == "Parole"){
                    rectangle();
                }
                else if (mot == "Elle" || mot == "elle" || mot == "elle,"){
                    circle();
                }
                else {
                    text(mot);
                }
            }
            drawWords();
        });
    }
    else if (hasard == 1 && dictionnaire.hasOwnProperty(cleCherchee)) {
        // Récupérer la valeur associée à la clé trouvée
        var valeur = dictionnaire[cleCherchee];
        text("\""+valeur+"\"");
    }
}

/*$('#image').on('click', function () {
    generateImage();
});*/

