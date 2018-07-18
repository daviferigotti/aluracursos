class NegociacaoController {

  constructor(){
    let $ = document.querySelector.bind(document); //aqui estamos criando um atalho para o "document.querySelector" (parecida com o jquery) - o bind é utilizado para manter o metodo querySelector no objeto documento
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacaoView($('#negociacoesView'));
    this._negociacoesView.update(this._listaNegociacoes);
  }

  adiciona(event){
    event.preventDefault(); //prevenindo o comportamento padrão do navegdor de recarregar a pagina

    //a forma abaixo seria a mais fácil de fazer, mas o intrustor preferiu outra para mostrar alumas funções.
    //let data = new Date(this._inputData.value.split('-')); chamamos uma nova data, passando como parametro o valor que foi digitado no formulario. O split serve para divdir a string que o formulário gera em um array separado pelo caracter "-", tornando a string uma data válida
    //na linha acima, poderia também ser usado uma expressão regular para trocar "-" por "," deixando a data no formato que Date() espera receber.
      //new Date(... //esses 3 pontinhos são novos do ECMAScript6. É um operador chamado spread operation, que desmembra o array passado para os parâmetros do Date, ou seja, array[0] é o primeiro parâmentro, array[1] é o segundo parâmetro, e assim por diante.
      //this._inputData.value
      //.split('-') daqui para baixo foi para o arquivo DateHelpers.js
      //.map((item, indice) => item - indice % 2)//.map é um metodo que percorre cada item do array velho, transforma, e cria novo array.
      //A operação módulo (%) encontra o resto da divisão de um número por outro.
      //foi utilizado novo jeito de declarar função = arrow function (na arrow function, como a função tem só uma instrução, pode tirar o bloco e o "return")
    //);

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);
    this._limpaFormulario();
    console.log(this._listaNegociacoes.negociacoes);

   }

   _criaNegociacao(){
     return new Negociacao(
       DateHelper.textoParaData(this._inputData.value),
       this._inputQuantidade.value,
       this._inputValor.value
     );
   };

   _limpaFormulario(){
     this._inputData.value = '';
     this._inputQuantidade.value = 1;
     this._inputValor.value = 0.0;

     this._inputData.focus();
   }
}
