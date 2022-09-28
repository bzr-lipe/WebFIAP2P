const btnCalcular = document.querySelector('#btnCalcularXP');

btnCalcular.addEventListener('click', function() {
    //pegar as trs com class "heroi"
    const herois = document.querySelectorAll('.heroi');
    console.log(herois);
    for(let i=0; i<herois.length; i++){
        let forca = Number(herois[i].querySelector('.forca').textContent);
        let agilidade = Number(herois[i].querySelector('.agilidade').textContent);
        let velocidade = Number(herois[i].querySelector('.velocidade').textContent);
        let xpFinal=(forca+ agilidade+ velocidade)/3;
        herois[i].querySelector('.xp').textContent = xpFinal.toFixed(1);
    }
});

// function mensagem (){
//     alert('oi')
// }
