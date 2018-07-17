class NegociacaoView {
    
    constructor(elemento){
        this._elemento = elemento; //guarda o elemento passado no parâmetro em uma variável
    }
    
    _template() {
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
        </tbody>

        <tfoot>
        </tfoot>
    </table>`;
    
    }
    
    update() {
        this._elemento.innerHTML = this._template(); //Pega o elemento passado por parâmetro através de uma new NegociacaoView no controller e torna a string template em objetos do DOM
    }
}
