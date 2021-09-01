function mudaFoto(foto) {
    document.getElementById("icone").src="../Imagens/"+foto+".png"
}

function calc_total() {
    var qtd = parseInt(document.getElementById('cqtd').value);
    tot = qtd * 1500;
    document.getElementById('ctot').value = tot;
}