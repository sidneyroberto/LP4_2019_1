import React, { Component } from 'react';

import adicionar from '../img/adicionar.png';
import remover from '../img/remover.png';

class Lista extends Component {

    render() {
        return (
            <div>

                <div id="formulario">

                    <form>

                        <select
                            name="produto">
                            <option>-- Escolha um produto --</option>
                            <option>Carne bovina</option>
                            <option>Creme dental</option>
                            <option>Farinha de trigo</option>
                        </select>

                        <input
                            type="number"
                            placeholder="Quantidade"
                            name="quantidade"
                            min="1" />
                        <span>Kg</span>

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
                            <tr>
                                <td>Farinha de trigo</td>
                                <td>1 kg</td>
                                <td>
                                    <button>
                                        <img src={remover} alt="Remover" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Carne bovina</td>
                                <td>2 kg</td>
                                <td>
                                    <button>
                                        <img src={remover} alt="Remover" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Creme Dental</td>
                                <td>1 bisnaga</td>
                                <td>
                                    <button>
                                        <img src={remover} alt="Remover" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default Lista;