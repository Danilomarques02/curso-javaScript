function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e teste novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''; // Corrigido para "genero" em vez de "gênero"
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe menino-fotor-2023081621554.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'menino-fotor-2023081621319.png');
            } else if (idade < 40) {
                img.setAttribute('src', 'homem meia idade-fotor-2023081621525.png');
            } else { 
                img.setAttribute('src', 'velho-fotor-2023081621455.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina-fotor-20230816204820.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher adolescente-fotor-2023081620501.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher de meia idade-fotor-2023081620518.png');
            } else { 
                img.setAttribute('src', 'senhora-fotor-20230816204738.png');
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}
