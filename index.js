/* <h2 id="pontos">0</h2><br>
        <input  id="nome_p" placeholder="NOME DO PATO"></input>
        <br>
       <button class="increment-btn" id="três_ponto" onclick="tresPontos()">3 pontos</button>
      <button class="increment-btn" id="um_ponto" onclick="umPonto()">1 pontos</button>*/
      let conta = 0
      let pontos = document.getElementById("pontos")
      let nome = document.getElementById("nome_p")
      let resultado =  document.getElementById("resultado")

    function tresPontos(){
        conta += 3
        pontos.textContent = conta
    }

    function umPonto(){
        conta += 1
        pontos.textContent = conta
    }

    function salvar(){
        let nome_p = nome.value;
        let resultadoStr = nome_p + " : " + conta +  " - ";
        resultado.textContent += resultadoStr;
        pontos.textContent = 0;
        conta = 0;
        nome.value = ""
    }

    

