function formSubmitted(e)
{
    var errors = "";

    var destination = document.getElementById("destination").value;
    if (destination == "") {
        errors += "Destino inválido\n";
    }
    
    var from = Date.parse(document.getElementById("departure_date").value);
    if (isNaN(from) == false) {
      var from = new Date(from);
    } else {
        errors += "Fecha de ida inválida\n";
    }

    var until = Date.parse(document.getElementById("arrival_date").value);
    if (isNaN(until) == false) {
      var until = new Date(until);
    } else {
        errors += "Fecha de vuelta inválida\n";
    }


    /**
     * Muestra errores si hay alguno.
     * Si no, muestra mensaje de todo correcto.
     */
    if (errors !== "") {
        alert(errors);
    } else if (until <= from) {
        alert("Fecha de vuelta no puede ser anterior a la fecha de ida");
    } else {
        alert("Todo correcto!");
    }
}

        /* Parte del carrusel de imagenes*/

/* Se seleccionan las imagenes del carrusel, los botones y la anchura de cada tramo*/
const track = document.querySelector(".trackCarrusel");
const slides = Array.from(track.children);
const nextButton = document.querySelector('.botonCarruselDerecho'); 
const prevButton = document.querySelector('.botonCarruselIzquierdo');
const SlideSize = slides[0].getBoundingClientRect();
const SlideWidth = SlideSize.width;

/* Se cambia la anchura de cada imagen a la correcta */

const setSlidePosition = (slide, index) => {
    slide.style.left = SlideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

/* Funciones de cada boton */

nextButton.addEventListener('click', e =>{
    const currentSlide = document.querySelector('.slideActual');
    var slideSiguiente;
    if(currentSlide.nextElementSibling===null){
        slideSiguiente = slides[0];
    }
    else{
        slideSiguiente = currentSlide.nextElementSibling;
    }
    const mover = slideSiguiente.style.left;

    track.style.transform = 'translateX(-' + mover + ')';
    currentSlide.classList.remove('slideActual');
    slideSiguiente.classList.add('slideActual');

    /* Resetea el cambio automatico */

    clearInterval(cambioAutomatico);
    cambioAutomatico = setInterval(cambioDeImagen, 6000);
})

prevButton.addEventListener('click', e =>{
    const currentSlide = document.querySelector('.slideActual');
    var slideSiguiente;
    if(currentSlide.previousElementSibling === null){
        slideSiguiente = slides[slides.length - 1];
    }
    else{
        slideSiguiente = currentSlide.previousElementSibling;
    }
    const mover = slideSiguiente.style.left;

    track.style.transform = 'translateX(-' + mover + ')';
    currentSlide.classList.remove('slideActual');
    slideSiguiente.classList.add('slideActual');

    /* Resetea el cambio automatico */
    
    clearInterval(cambioAutomatico);
    cambioAutomatico = setInterval(cambioDeImagen, 6000);
})


/*  Cambio de imagen automático    */

function cambioDeImagen(){
    
        const currentSlide = document.querySelector('.slideActual');
        var slideSiguiente;
        if(currentSlide.nextElementSibling===null){
            slideSiguiente = slides[0];
        }
        else{
            slideSiguiente = currentSlide.nextElementSibling;
        }
        const mover = slideSiguiente.style.left;

        track.style.transform = 'translateX(-' + mover + ')';
        currentSlide.classList.remove('slideActual');
        slideSiguiente.classList.add('slideActual');

}
var cambioAutomatico = setInterval(cambioDeImagen, 6000)