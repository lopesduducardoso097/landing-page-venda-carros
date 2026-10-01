
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});

// Botão de interesse nos veículos

function comprar(carro) {
    alert("Você demonstrou interesse no " + carro + "! Nossa equipe entrará em contato.");
}
