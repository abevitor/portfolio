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

    // Função para mover o carrossel à direita
    const moverDireita = () => {
        // Se chegou no final, volta pro início
        if (carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth) {
            carrossel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Eventos das setas
    setaDireita.addEventListener('click', moverDireita);
    setaEsquerda.addEventListener('click', () => {
        if (carrossel.scrollLeft <= 0) {
            carrossel.scrollTo({ left: carrossel.scrollWidth, behavior: 'smooth' });
        } else {
            carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    });

    // Autoplay a cada 3 segundos
    setInterval(moverDireita, 3000);
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


// mensagem erro

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");

    let erroNome = document.getElementById("erro-nome");
    let erroEmail = document.getElementById("erro-email");
    let erroMensagem = document.getElementById("erro-mensagem");

    let valido = true;

    // Reset mensagens
    erroNome.style.display = "none";
    erroEmail.style.display = "none";
    erroMensagem.style.display = "none";

    // Validações
    if (nome.value.trim() === "") {
        erroNome.textContent = "⚠ Preencha seu nome!";
        erroNome.style.display = "inline-block";
        valido = false;
    }
    if (email.value.trim() === "") {
        erroEmail.textContent = "⚠ Preencha seu e-mail!";
        erroEmail.style.display = "inline-block";
        valido = false;
    } else if (!email.value.includes("@")) {
        erroEmail.textContent = "⚠ E-mail inválido!";
        erroEmail.style.display = "inline-block";
        valido = false;
    }
    if (mensagem.value.trim() === "") {
        erroMensagem.textContent = "⚠ Escreva sua mensagem!";
        erroMensagem.style.display = "inline-block";
        valido = false;
    }

    if (valido) {
        alert("Mensagem enviada com sucesso!");
        // Aqui você pode enviar o formulário
        // this.submit();
    }
});



