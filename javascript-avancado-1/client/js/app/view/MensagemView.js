class MensagemView extends View{
  /*

  OBSERVAÇÃO IMPORTANTE: Estou comentando esta parte do código, pois será herdado de View.js,
  mas não vou excluir pois quero me lembrar de como foi feito inicialmente.

  constructor(elemento){
    this._elemento = elemento;
  }
  */
  
  constructor(elemento){
    super(elemento);
  }

  _tamplate(model){
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
  }

/*

OBSERVAÇÃO IMPORTANTE: Estou comentando esta parte do código, pois será herdado de View.js,
mas não vou excluir pois quero me lembrar de como foi feito inicialmente.


  update(model){
    this._elemento.innerHTML = this._tamplate(model);
  }

  */
}
