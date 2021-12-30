const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.mainContainer');
const mobileNavbar = document.querySelector('aside');

let lastYPos = 10;
let mobileNavBarIsVisible = false;
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

function showMobileNavbar() {
    if (mobileNavBarIsVisible === false) {
        mobileNavbar.hidden = false;
        lastYPos = window.pageYOffset;
        window.scrollTo(0, 0);
        mobileNavBarIsVisible = true;
        mobileNavbar.classList.add('active');
    } else {
        mobileNavBarIsVisible = false;
        mobileNavbar.classList.remove('active');
        window.scrollTo(0, lastYPos);
        setTimeout(() => {
            mobileNavbar.hidden = true;
        }, 1000);
    }
}
