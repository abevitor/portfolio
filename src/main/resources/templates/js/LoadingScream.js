// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => { loadingScreen.style.display = 'none'; }, 1000);
});

// Carrossel
const carrossels = document.querySelectorAll('.carrossel-container');
carrossels.forEach(container => {
    const carrossel = container.querySelector('.carrossel');
    const setaEsquerda = container.querySelector('.seta-esquerda');
    const setaDireita = container.querySelector('.seta-direita');
    const scrollAmount = 260;

    setaDireita.addEventListener('click', () => {
        carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    setaEsquerda.addEventListener('click', () => {
        carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
});

// Modal Tecnologias
const modal = document.getElementById("modalTecnologias");
const btn = document.getElementById("mostrarMaisBtn");
const span = document.querySelector(".fechar");

// abrir modal
btn.onclick = () => modal.style.display = "flex";

// fechar modal ao clicar no "x"
span.onclick = () => modal.style.display = "none";

// fechar modal ao clicar fora do conteúdo
window.onclick = (event) => {
    if(event.target === modal) modal.style.display = "none";
};



