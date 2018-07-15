class DateHelper{

  constructor(){
    throw new Error('DateHelper não pode ser instanciada')
  }

  static dataParaTexto(data){
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  };

  static textoParaData(texto){

    if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)){
      throw new Error('Deve estar no formato aaaa-mm-dd')
    }

    return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); //.map é um metodo que percorre cada item do array velho, transforma, e cria novo array.
    //A operação módulo (%) encontra o resto da divisão de um número por outro.
    //foi utilizado novo jeito de declarar função = arrow function (na arrow function, como a função tem só uma instrução, pode tirar o bloco e o "return")
  };

};
