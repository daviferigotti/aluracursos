class NegociacaoView {

    constructor(elemento){
        this._elemento = elemento; //guarda o elemento passado no parâmetro em uma variável, neste caso,
                                  //o elemento é a div com id negociacoesView, passado como parâmetro lá no
                                  //NegociacaoController
    }

    _template(model) {
        return `<table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
          ${model.negociacoes.map((n) => `

              <tr>
                <td>${DateHelper.dataParaTexto(n.data)}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
                <td>${n.volume}</td>
              </tr>

          `).join('')}
        </tbody>

        <tfoot>
          <td colspan="3"></td>
          <td>${model.negociacoes.reduce(function(total, n){
            return total + n.volume;
              }, 0.0)
        }
          </td>
        </tfoot>
    </table>`; //O método join() junta todos os elementos de uma array (ou um array-like object)
              //em uma string e retorna esta string.

    }

    update(model) {
        this._elemento.innerHTML = this._template(model); //Pega o elemento passado por parâmetro através de uma
                                                          //new NegociacaoView no controller e torna a string
                                                          //template em objetos do DOM
    }
}
