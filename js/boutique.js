// function changeImage() {
//     let displayImage = document.querySelector('.product-image-1');
//     if (displayImage.src.match('https://blogger.googleusercontent.com/img/a/AVvXsEj5JbjFHTpaJ1ACNk9epDZM28Sv96Jp2pDTtUf45CtybF--yuazD9qkxiB1S7oyeMtzrvDDJBlGTdukKgOSrLqUVtMdMjULHy_mt48vYmQov_X0tLrsQgy8NW9wPDF71clWZUVJDWkEj5Klh5JUzHBuUi80NlIzYzhz7mIfD9t64Y7NnwpmDDy8-1LJilw')){
//         displayImage.src = 'https://blogger.googleusercontent.com/img/a/AVvXsEgJ8J8n0uXxlOvHz7SDm3uF3af3Qngepw_PSChkIdwilTxRcbBLxBE-LX2wM7Dqqf5JAEoR3vXjdYVcEo5cG-tX9nKbCHxe3Nn2JrjpdJ9G7TAORQoAhiyu1TadRLg91DI-Cotpr2fYisVVMcEIVCpz1txzVuhlBDdDTdBEi0-zMwv6o3adAZxKWalUAAU';
//     }else{
//         displayImage.src = 'https://blogger.googleusercontent.com/img/a/AVvXsEj5JbjFHTpaJ1ACNk9epDZM28Sv96Jp2pDTtUf45CtybF--yuazD9qkxiB1S7oyeMtzrvDDJBlGTdukKgOSrLqUVtMdMjULHy_mt48vYmQov_X0tLrsQgy8NW9wPDF71clWZUVJDWkEj5Klh5JUzHBuUi80NlIzYzhz7mIfD9t64Y7NnwpmDDy8-1LJilw';
//     }
// }
function changeImage() {
    let displayImage = document.querySelector('.product-image-1');
    if (displayImage.src.match("img/parlons2.jpg")){
        displayImage.src = "img/parlons1.jpg";
    }else{
        displayImage.src = "img/parlons2.jpg";
    }
}

function changeImage2() {
    let displayImage = document.querySelector('.product-image-1b');
    if (displayImage.src.match('img/IMG-20230702-WA0014.jpg')){
        displayImage.src = 'img/IMG-20230702-WA0016.jpg';
    }else{
        displayImage.src = 'img/IMG-20230702-WA0014.jpg';
    }
}


// changeImage('.product-image-1', 'img/hoody_Front.png', 'img/hoody_dos_orange_Front.png')