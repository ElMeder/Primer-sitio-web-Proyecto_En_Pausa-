let indice = 1;
let indices = 0;
muestraSlides(indice);
muestrabarras(indice);


function avanzaSlides (n){
    muestraSlides(indice+=n);
}

function avanzabarras (n){
    muestrabarras(indice+=n);
    muestraSlides(indices+=n);
}

function posicionbarras(n){
    muestrabarras(indice=n);
    muestraSlides(indice=n);
}

function posicionSlide(n){
    muestraSlides(indice=n);
    
}


function muestrabarras(n){
    let i;
    let barras = document.getElementsByClassName("puntos");

    if(n > barras.length){
        indice = 1;
    }
    if(n < 1){
        indice =  barras.length();
    }
}

function muestraSlides(n){
    let i;
    let Slides = document.getElementsByClassName("mislider");
    let barras = document.getElementsByClassName("puntos");
    
    if(n > barras.length){
        indice = 1;
    }
    if(n < 1){
        indice =  barras.length();
    }

    for(i = 0; i < Slides.length; i++){
        Slides[i].style.display = "none";
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", ""); 
    }

    Slides[indice-1].style.display = "block";
    barras[indice-1].className += " active";  
}