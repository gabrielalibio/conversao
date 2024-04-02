function calcularConversao() {
    const real = document.getElementById('real').value;
    const cotacaoDolar = 5.06;
    const dolar = real / cotacaoDolar;

    document.getElementById('resultado').textContent = dolar.toFixed(2);
}

const toggleBtn = document.getElementById("toggle");
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
})