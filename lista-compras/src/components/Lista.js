import React, { Component } from 'react';
import axios from 'axios';

import { URL_API } from '../config';
import adicionar from '../img/adicionar.png';
import remover from '../img/remover.png';

class Lista extends Component {

    constructor() {
        super();

        this.state = {
            item: {
                produtoId: '',
                produto: '',
                quantidade: 1,
                unidadeMedida: ''
            },
            listaDeCompras: [],
            produtos: []
        };

        this.aoAlterarValor =
            this.aoAlterarValor.bind(this);
        this.carregarProdutos =
            this.carregarProdutos.bind(this);
        this.salvar = this.salvar.bind(this);
        this.remover = this.remover.bind(this);
    }

    componentDidMount() {
        this.carregarProdutos();
    }

    aoAlterarValor(evento) {
        const nome = evento.target.name;
        const valor = evento.target.value;
        let item = { ...this.state.item };
        if (nome === 'produto') {
            const produtoSelecionado =
                this.state.produtos.find(produto => produto._id === valor);
            item['produto'] = produtoSelecionado.descricao;
            item['unidadeMedida'] = produtoSelecionado.unidadeMedida;
            item['produtoId'] = valor;
        } else {
            item['quantidade'] = valor;
        }

        this.setState({ item });
    }

    carregarProdutos() {
        axios
            .get(URL_API)
            .then(
                resposta =>
                    this.setState({ produtos: resposta.data })
            )
            .catch(erro => console.log(erro));
    }

    salvar() { }
    remover() { }

    render() {
        const opcoesProdutos =
            this.state.produtos.map(produto => {
                return (
                    <option
                        value={produto._id}
                        key={produto._id}>
                        {produto.descricao}
                    </option>
                );
            });



        return (
            <div>

                <div id="formulario">

                    <form>

                        <select
                            value={this.state.item.produtoId}
                            onChange={this.aoAlterarValor}
                            name="produto">
                            {opcoesProdutos}
                        </select>

                        <input
                            value={this.state.item.quantidade}
                            onChange={this.aoAlterarValor}
                            type="number"
                            placeholder="Quantidade"
                            name="quantidade"
                            min="1" />
                        <span>{this.state.item.unidadeMedida}</span>

                        <button>
                            <img src={adicionar} alt="Adicionar produto" />
                        </button>
                    </form>

                </div>

                <div id="listaCompras">
                    <table>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Qtde</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default Lista;