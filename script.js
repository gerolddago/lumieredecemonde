const canvas = new fabric.Canvas('canvas', {isDrawingMode: false});

// function redirectErrorFormat(){
//     if (window.screen.availWidth < 645){
//         document.location.replace("error-format.html");
//         console.log("error format !");
//     }
// }
// redirectErrorFormat();

// function resizeCanvas(){
//     if (window.screen.availWidth < 645){
//         console.log("xCanvas",window.innerWidth - (window.innerWidth/2));
//         console.log("yCanvas",window.innerHeight - (window.innerHeight/2));
//         canvas.width = window.innerWidth - (window.innerWidth/2);
//         canvas.height = window.innerHeight - (window.innerWidth/2);
//     }
// }
// window.onresize = function(){resizeCanvas();};




// var scroll = 0;
// header = document.querySelector('header');
// $(window).bind('mousewheel', function(event) {
    
//     // var scrollDown = 0;
//     if (event.originalEvent.wheelDelta >= 0) {
//         if (scroll < 9){
//             header.style.backgroundColor = "transparent";
//         }
//         if (scroll <= 0){
//             scroll = 0;
//         }
//         else{
//             console.log('Scroll up');
//             scroll = scroll - 1;
//             console.log(scroll);
//         }
//     }
//     else {
//         console.log('Scroll down');
//         scroll = scroll + 1;
//         console.log(scroll);
//         // if (scroll > 0){
//         //     header.style.backgroundColor = "#FFFFFF";
//         // }
//     if (scroll >= 9){
//         header.style.backgroundColor = "#FFFFFF";
//     }

//     }
//     });

// var password = document.querySelector("#password").value;
// $("#password").on('keyup', function (e) {
//     if (e.key === 'Enter' || e.keyCode === 13){
//         if (password === '123'){
//             document.location.replace("acceuil.html");
//             console.log("entrer acceuil");
//         }
//     }
// });
// const input = document.querySelector("#password");
// input.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") {
//     console.log('Enter key pressed')
//   }
// });




function canvasBgImg(BgImg){
    canvas.setBackgroundImage(BgImg, canvas.renderAll.bind(canvas), {
    backgroundImageOpacity: 1,
    originX: "left",
    originY: "top",
    top: -217,
    left: -195,
    scaleX: 0.9,
    scaleY: 0.9,
    });
}
canvasBgImg('img/L.jpg');
/*canvas.style.position = "absolute";
canvas.style.left = "300px";
canvas.style.top = "50px";*/

let overallColor = 'white';
canvas.freeDrawingBrush.color = 'white';
canvas.freeDrawingBrush.width = 5;


$('#draw').on('click', function () {
    // canvas.freeDrawingBrush.color = 'white';
    canvas.freeDrawingBrush.color = overallColor;
    canvas.isDrawingMode = !canvas.isDrawingMode;
});
$('#select').on('click', function () {
    canvas.isDrawingMode = false;
});

$('#rectangle').on('click', function () {
    canvas.isDrawingMode = false;
    const rectangle = new fabric.Rect({
        left: random(140,canvas.width - (canvas.width / 5)),
        top: random(170,canvas.height - (canvas.height / 5)),
        width: 60,
        height: 60,
        fill: 'transparent',
        // stroke: 'white',
        stroke: overallColor,
        strokeWidth: 7,
    });
    canvas.add(rectangle);
});

$('#circle').on('click', function () {
    canvas.isDrawingMode = false;
    const circle = new fabric.Circle({
        left: random(140,canvas.width - (canvas.width / 5)),
        top: random(170,canvas.height - (canvas.height / 5)),
        radius: 30,
        fill: 'transparent',
        // stroke: 'white',
        stroke: overallColor,
        strokeWidth: 7,
    });
    canvas.add(circle);
});

$('#text').on('click', function () {
    canvas.isDrawingMode = false;
    const text = new fabric.IText('lorem', {
        left: random(140,canvas.width - (canvas.width / 5)),
        top: random(170,canvas.height - (canvas.height / 5)),
        objecttype: 'text',
        // fontFamily: 'Segoe UI',
        // fontFamily: 'macondo',
        fontFamily: 'Magilio',
        fontSize: 20,
        // fill: 'white',
        fill: overallColor,
    });
    canvas.add(text);
});

const dataImages = ['img/planet.jpg', 'img/cross.jpg', 'img/sky3.png', 'img/art_2.jpg', 'img/art_3.jpg'];
let randomIndex = Math.floor(Math.random() * dataImages.length);
dataImage = dataImages[randomIndex];


$('#image').on('click',function() {
    canvas.isDrawingMode = false;
    //fabric.Image.fromURL('img/square.webp', function(img){
    fabric.Image.fromURL(dataImage, function(img){
        img.set({
            top:150, 
            left:230,
        });
        img.scaleToHeight(150);
        img.scaleToWidth(150);
        //img.rotate(45);
        canvas.add(img);
    });
});


$('#remove').on('click', function () {
    canvas.isDrawingMode = false;
    canvas.remove(canvas.getActiveObject());
});

canvas.on('selection:created', function () {
    $('#remove').prop('disabled', '');
});
canvas.on('selection:cleared', function () {
    $('#remove').prop('disabled', 'disabled');
});

$('#tosvg').on('click', function () {
    $('#svg').html('<h4>SVG:</h4><br>' + canvas.toSVG());
    // console.log($('canvas').toDataURL('image/png', 100));
    // console.log(canvas.toDataURL());
});

$('#black').on('click', function () {
    canvasBgImg('img/L.jpg');
});
$('#white').on('click', function () {
    canvasBgImg('img/L_w.jpg');
    overallColor = 'black';
});


//-------------------------------INFOS

//PRODUCT INFORMATIONS
textDisplay1 = document.querySelector('#textDisplay1');
// info1 = document.querySelector('#info1');
info1Titre = document.querySelector('#info1 p');
textDisplay1.style.display = "none";
// info1.style.display = "flex";
$('#info1').on('click', function () {
    if (textDisplay1.style.display == "none"){
        textDisplay1.style.display = "block";
        info1Titre.style.display = "none";
    }
    else{
        textDisplay1.style.display = "none";
        info1Titre.style.display = "flex";
    }
});
$('#textDisplay1').on('click', function () {
    if (info1.style.display == "none"){
        info1Titre.style.display = "flex";
        textDisplay1.style.display = "none";
    }
    else{
        info1Titre.style.display = "none";
        textDisplay1.style.display = "block";
    }
});

//SIZETABLE
textDisplay2 = document.querySelector('#textDisplay2');
// info2 = document.querySelector('#info2');
info2Titre = document.querySelector('#info2 p');
textDisplay2 = document.querySelector('#info2 img');
textDisplay2.style.display = "none";
// info2.style.display = "flex";
$('#info2').on('click', function () {
    if (textDisplay2.style.display == "none"){
        textDisplay2.style.display = "block";
        info2Titre.style.display = "none";
    }
    else{
        textDisplay2.style.display = "none";
        info2Titre.style.display = "flex";
    }
});
$('#textDisplay2').on('click', function () {
    if (info2.style.display == "none"){
        info2Titre.style.display = "flex";
        textDisplay2.style.display = "none";
    }
    else{
        info2Titre.style.display = "none";
        textDisplay2.style.display = "block";
    }
});

//DELIVERY RETURNS
textDisplay3 = document.querySelector('#textDisplay3');
// info3 = document.querySelector('#info3');
info3Titre = document.querySelector('#info3 p');
textDisplay3.style.display = "none";
// info3.style.display = "flex";
$('#info3').on('click', function () {
    if (textDisplay3.style.display == "none"){
        textDisplay3.style.display = "block";
        info3Titre.style.display = "none";
    }
    else{
        textDisplay3.style.display = "none";
        info3Titre.style.display = "flex";
    }
});
$('#textDisplay3').on('click', function () {
    if (info3.style.display == "none"){
        info3Titre.style.display = "flex";
        textDisplay3.style.display = "none";
    }
    else{
        info3Titre.style.display = "none";
        textDisplay3.style.display = "block";
    }
});

//INFOS----------------------------------




const image_input = document.querySelector('#image_input');
let uploaded_image = "";

/*image_input.addEventListener("change", function(){
    console.log(image_input.value);
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        uploaded_image = reader.result;
        canvas.setBackgroundImage(uploaded_image, canvas.renderAll.bind(canvas));
    });
    reader.readAsDataURL(this.files[0]);
})*/








//-----------------------------------------------------------
// //clear cache drawing event handler
// document.getElementById('saveToImage').addEventListener('click',function(){
//     downloadCanvas(this,'canvas','116Creation.png')
// },false);

// // saving function to store in local storage
// function downloadCanvas(link,canvas,filename){
//     link.href = document.getElementById(canvas).toDataURL();
//     link.download = filename;
// }




// savePay.addEventListener("click", () => {
//     const link = document.createElement("a"); // creating <a> element
//     //link.download = `${Date.now()}.jpg`; // passing current date as link download value
//     link.download = `116 CREATION .jpg`;
//     link.href = canvas.toDataURL(); // passing canvasData as link href value
//     console.log(link.href);
//     link.click(); // clicking link to download image
    
//     // RecapCommande();
//     });

// $('#tosvg').on('click', function () {
//     const link = document.createElement("a"); // creating <a> element
//     //link.download = `${Date.now()}.jpg`; // passing current date as link download value
//     link.download = `116 CREATION .jpg`;
//     link.href = canvas.toDataURL(); // passing canvasData as link href value
//     console.log(link.href);
//     link.click(); // clicking link to download image
// });