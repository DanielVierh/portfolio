const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.mainContainer');

let load = 0;

// Startet den Intervall initially
let intv = setInterval(blurring, 10);

function blurring() {
    load++;
    // Sobald 100 erreicht wird, wird Intervall mit
    // clearIntervall beendet
    if (load > 99) {
        clearInterval(intv);
    }

    loadText.innerText = `${load}%`;
    bg.style = `filter: blur(${100 - load}px)`;
    loadText.style.opacity = `${(100 - load) / 100}`;
}
