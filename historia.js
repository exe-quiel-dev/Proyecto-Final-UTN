const video = document.querySelector('#video');
const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const duration = document.querySelector('#duration');

const p1 = document.querySelector('#one');
const p2 = document.querySelector('#two');
const p3 = document.querySelector('#three');
const containerVideo = document.querySelector('#videoContainer');

eventListeners();

// HANDLERS
function eventListeners() {
    document.addEventListener('DOMContentLoaded', actualizarTiempo);
    playBtn.addEventListener('click', () => video.play());
    pauseBtn.addEventListener('click', () => video.pause());
    video.addEventListener('timeupdate', actualizarTiempo);
    video.addEventListener('loadeddata', actualizarTiempo);
}

function actualizarTiempo() {
    duration.innerHTML = `
       <p class="video-time">${convertir(video.currentTime)} / ${convertir(video.duration)}</p> 
    `;
}
function convertir(segundos) {
    let d = new Date(segundos*1000);
    let segundo = (d.getSeconds() <= 9 ? '0' + d.getSeconds() : d.getSeconds());
    let minuto = d.getMinutes() <= 9 ? '0' + d.getMinutes() : d.getMinutes();

    return `${minuto}:${segundo}`;
}


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
observer.observe(p1);
observer.observe(p2);
observer.observe(p3);
observer.observe(containerVideo);




