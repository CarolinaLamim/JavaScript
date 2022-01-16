

function darkMode() {
    changeClasses();
    changeText();
}

function changeClasses(){
    titulo.classList.toggle('dark-mode');
    botao.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
}

function changeText() {
    if(body.classList.contains('dark-mode')) {
        botao.innerHTML = "Light Mode";
        titulo.innerHTML = "Dark Mode ON";
        return;
    }
    botao.innerHTML = "Dark Mode";
    titulo.innerHTML = "Light Mode ON";
}

const botao = document.getElementById('mode-selector');
const titulo = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

botao.addEventListener("click", darkMode);