const frm = document.querySelector("form");
const resultadoLitros = document.querySelector(".outLitros");
const resultadoPreco = document.querySelector(".outPreco");

frm.addEventListener("submit", (e) => {
    var distancia = frm.inDistancia.value;
    const precoLitro = frm.inPrecoLitro.value;
    const mediaConsumo = frm.inMediaConsumo.value;
    const idaVolta = frm.viagem.value;
    const quantDias = frm.inQuantDias.value;

    if (idaVolta == "sim") {
        distancia = distancia *2
    }

    const mediaLitros = (distancia * quantDias) / mediaConsumo;
    const mediaPreco = mediaLitros * precoLitro;

    resultadoLitros.innerText = `${mediaLitros.toFixed(2)} Litros`;
    resultadoPreco.innerText = `R$ ${mediaPreco.toFixed(2)}`;
    
    e.preventDefault();
})