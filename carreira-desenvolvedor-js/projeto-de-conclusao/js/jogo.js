function criaJogo(){

  function setPalavraSecreta(palavra){
    var palavraSecreta = palavra;
    var quantidadeDeLetras = palavraSecreta.length;
  };

  function getLacuna(){
    var arrayLacuna = [];
    var lacunas = '1';

    for (var i = 0; i < palavraSecreta.length; i++) {
      arrayLacuna.push(lacunas);
    }

  };

  function getEtapa(){

  };

  return{
    setPalavraSecreta: setPalavraSecreta,
    getLacuna: getLacuna,
    getEtapa: getEtapa
  };

};
