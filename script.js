const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');


const cargarImagen = (entradas, observador) => {
    entradas.forEach( entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }else{
            entrada.target.classList.remove('visible');
        }
    });
}


const observer = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px',
    threshold: 1
});

observer.observe(img1);
observer.observe(img2);
