const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.mainContainer');
const mobileNavbar = document.querySelector('aside');
const toggleSwitch = document.getElementById("checkbox");
const nameField = document.getElementById("nameField");
let charIterator = 0;
let myname = 'Hi, I am <Daniel/>';

window.onload = () => {
    setInterval(writeName, 5000);
}


const writeName = () => {
    if (charIterator < myname.length) {
        nameField.innerHTML += myname.charAt(charIterator);
        charIterator++;
        setTimeout(writeName, 100);
    }else{
        setTimeout(() => {
            nameField.innerHTML = '';
            charIterator = 0;
        }, 5000);
    }
}


// Switch Theme
toggleSwitch.addEventListener("change",  switchTheme, true);

function switchTheme(e) {
    if(e.target.checked) {

        document.documentElement.setAttribute('data-theme', 'light');
    }else{
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}


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
        hideMobileNavBackground();
    }
}

mobileNavbar.addEventListener("click", hideMobileNavBackground);

function hideMobileNavBackground() {
    mobileNavBarIsVisible = false;
    mobileNavbar.classList.remove('active');
    window.scrollTo(0, lastYPos);
    // setTimeout(() => {
        mobileNavbar.hidden = true;
    // }, 1000);
}

// Vue

const app = Vue.createApp({
    data: function () {
        return {
            projects: projects, // Aus projects.JS Datei
        };
    },
});

const vm = app.mount('#app');
