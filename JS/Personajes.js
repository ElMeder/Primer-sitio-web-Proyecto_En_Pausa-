let indice = 1;
muestraSlides(indice);

function avanzaSlide (n){
    muestraSlides(indice+=n);
}

function posicionSlide(n){
    muestraSlides(indice=n);
}

setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);

function muestraSlides(n){
    let i;
    let Slides = document.getElementsByClassName("mislider");
    let barras = document.getElementsByClassName("puntos");

    if(n > Slides.length){
        indice = 1;
    }
    if(n < 1){
        indice =  Slides.length();
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



