onclick="calcular()"
function calcular() {
    let nota1 = parseFloat (document.getElementById('nota1').value);
    let nota2 = parseFloat (document.getElementById('nota2').value);
    let nota3 = parseFloat (document.getElementById ('nota3').value);
   let media = (nota1 + nota2 + nota3) / 3;
let Nome = document.getElementById('Nome').value;
let a = document.getElementById('a');
resultado.textContent = `Ola ${Nome}, sua media e : ${media.toFixed(1)}`;






}

document.getElementById("imagem").addEventListener("click", function() {
    alert("ahhaahhaah, peguei seus dados jajajajajajaj");
});




