const restartBtn = document.querySelector('.reinicio');
const dropsZone1 = document.querySelector('.cajasoltar1');
const dropsZone2 = document.querySelector('.cajasoltar2');
const dropsZone3 = document.querySelector('.cajasoltar3');


function reiniciar(e) {
    e.preventDefault();
    dropsZone1.innerHTML = `<p>Arrastre y suelte la imagen aqui</p>`;
    dropsZone2.innerHTML = `<p>Arrastre y suelte la imagen aqui</p>`;
    dropsZone3.innerHTML = `<p>Arrastre y suelte la imagen aqui</p>`;
    
};

const preventDefault = e => e.preventDefault();

function startDrag(e) {
    e.dataTransfer.setData('URL', e.target.src);
}
function dropImage(e) {
    const dZone = e.target;
    let info = e.dataTransfer.getData('Text');
    dZone.innerHTML = `
        <img class="img-rompe" src="${info}"/>
    `;
}

restartBtn.addEventListener('click', reiniciar);
