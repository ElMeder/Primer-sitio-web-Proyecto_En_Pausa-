let indices = 1;
muestraFanArt(indices);

function avanzaFanArt (z){
    muestraFanArt(indices+=z);
}

function posicionFanArt(z){
    muestraFanArt(indices=z);
}

function muestraFanArt(z){
    let i;
    let FanArt = document.getElementsByClassName("FanSlider");
    let barre = document.getElementsByClassName("punto");

    if(z > FanArt.length){
        indices = 1;
    }
    if(z < 1){
        indices =  FanArt.length();
    }
    for(i = 0; i < FanArt.length; i++){
        FanArt[i].style.display = "none";
    }
    for(i = 0; i < barre.length; i++){
        barre[i].className = barre[i].className.replace(" active", ""); 
    }

    FanArt[indices-1].style.display = "block";
    barre[indices-1].className += " active";  
}